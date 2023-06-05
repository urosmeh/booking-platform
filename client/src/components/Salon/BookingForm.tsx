import { SubmitHandler, useForm } from "react-hook-form";
import { Salon } from "../../models/Salon";
import { Service } from "../../models/Service";
import { User } from "../../models/User";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const services: Service[] = [
  {
    id: 1,
    title: "Hair coloring1",
  },
  {
    id: 2,
    title: "Hair coloring2",
  },
  {
    id: 3,
    title: "Hair coloring3",
  },
];

type BookingFormType = {
  serviceDate: string;
  notes: string;
  service: number;
  salonId: number;
} & User;

type BookingFormProps = {
  user: User;
  salon: Salon;
};

const defaultValues: BookingFormType = {
  serviceDate: new Date().toISOString().slice(0, 16),
  notes: "",
  service: services[0].id,
  salonId: 1,
  firstName: "uros",
  lastName: "meh",
  email: "uros.meh@gmail.com",
};

export const BookingForm = ({ user, salon }: BookingFormProps) => {
  const [serviceDate, setServiceDate] = useState(
    new Date().toISOString().slice(0, 16)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormType>();
  const toast = useToast();

  const onSubmit: SubmitHandler<BookingFormType> = (formData) => {
    const selectedService = services.find(
      (service) => service.id === formData.service
    );
    
    toast({
      title: "Booking submitted",
      description: `You've successfully submitted your booking for service: ${
        selectedService?.title
      } for ${salon.name} at ${new Date(serviceDate).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    reset(defaultValues);
  };

  return (
    <Flex as="form" direction={"column"} onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors?.firstName}
        {...register("firstName", { required: true })}
      >
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <Input name="firstName" defaultValue={user.firstName} />
      </FormControl>
      <FormControl
        id="lastName"
        isInvalid={!!errors.lastName}
        {...register("lastName", { required: true })}
      >
        <FormLabel>Last Name</FormLabel>
        <Input name="lastName" defaultValue={user.lastName} />
      </FormControl>
      <FormControl
        id="email"
        isInvalid={!!errors.email}
        {...register("email", { required: true })}
      >
        <FormLabel>Email</FormLabel>
        <Input name="email" defaultValue={user.email} />
      </FormControl>
      <FormControl
        id="service"
        isInvalid={!!errors.service}
        {...register("service", { required: true })}
      >
        <FormLabel>Service</FormLabel>
        <Select name="service">
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="notes" {...register("notes")}>
        <FormLabel>Notes</FormLabel>
        <Textarea name="notes" />
      </FormControl>
      <FormControl
        id="serviceDate"
        isInvalid={!!errors.serviceDate}
        {...register("serviceDate", { required: true })}
      >
        <FormLabel>Service Date</FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
        />
      </FormControl>
      <Button type="submit" backgroundColor={"green.300"} color={"white"}>
        Submit
      </Button>
    </Flex>
  );
};
