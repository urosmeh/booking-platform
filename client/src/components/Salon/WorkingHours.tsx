import { Box, Flex } from "@chakra-ui/react";
import { WorkingHours } from "../../models/WorkingHours";

type WorkingHoursProps = {
  workingHours: WorkingHours;
};
export const WorkingHoursC = ({ workingHours }: WorkingHoursProps) => {
  return (
    <Flex direction={"column"}>
      {Object.entries(workingHours).map((obj) => {
        const [day, value] = obj;
        if (day === "salonId") return;
        return (
          <Box key={day}>
            {day}: {value ? value : "Closed"}
          </Box>
        );
      })}
    </Flex>
  );
};
