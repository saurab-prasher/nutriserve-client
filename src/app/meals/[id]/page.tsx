"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SingleMeal from "@/app/components/SingleMeal";

const Page = () => {
  const [meal, setMeal] = useState();

  const urlParam = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:5000/api/meals/${urlParam?.id}`
      );
      const data = await res.json();
      setMeal(data);
    };

    fetchData();
  }, [urlParam]);

  return <SingleMeal meal={meal} />;
};

export default Page;
