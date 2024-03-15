"use client";
import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import SingleMeal from "@/app/components/SingleMeal";
import { MyContext } from "@/app/context/Context";

const Page = () => {
  const { serverUrl } = useContext(MyContext);
  const [meal, setMeal] = useState();

  const urlParam = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${serverUrl}/api/meals/${urlParam?.id}`);
      const data = await res.json();
      setMeal(data);
    };

    fetchData();
  }, [urlParam, serverUrl]);

  return <SingleMeal meal={meal} />;
};

export default Page;
