import { useEffect, useState } from "react";
import { Category } from "../models/Category";
import { Salon } from "../models/Salon";

export type FilterSalonsProps = {
  search: string;
  selectedCategory?: Category;
  salons?: Salon[];
};

const useFilteredSalons = ({
  search,
  selectedCategory,
  salons,
}: FilterSalonsProps) => {
  const [filteredSalons, setFilteredSalons] = useState(salons);

  useEffect(() => {
    setFilteredSalons(
      salons?.filter((s) => {
        if (search.length > 0 && selectedCategory) {
          return (
            s.name.toLowerCase().includes(search.toLowerCase()) &&
            s.categoryId === selectedCategory.id
          );
        }

        if (search.length > 0 && !selectedCategory) {
          return s.name.toLowerCase().includes(search.toLowerCase());
        }

        if (selectedCategory && search.length === 0) {
          return s.categoryId === selectedCategory.id;
        }

        if (!selectedCategory && search.length === 0) {
          return true;
        }
      }) || []
    );
  }, [search, selectedCategory, salons]);

  return filteredSalons;
};

export default useFilteredSalons;
