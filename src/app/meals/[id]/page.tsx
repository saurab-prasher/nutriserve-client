"use client";
import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import SingleMeal from "@/app/components/SingleMeal";
import { MyContext } from "@/app/context/Context";
import Image from "next/image";
import Loader from "@/app/components/Loader";
type NutritionalValues = {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
};

type Meal = {
  nutritionalValues: NutritionalValues;
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  imageUrl: string;
};

const Page = ({ width, height }: any) => {
  const { serverUrl, handleAddMeal } = useContext(MyContext);
  const [meal, setMeal] = useState<Meal>();

  const urlParam = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${serverUrl}/api/meals/${urlParam?.id}`);
      const data = await res.json();
      setTimeout(() => {
        setMeal(data);
      }, 2000);
    };

    fetchData();
  }, [urlParam, serverUrl]);

  return (
    <div className='container py-16 mx-auto mb-24'>
      {!meal ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-2'>
          <div className=''>
            <div>
              <Image
                className='rounded-t-lg'
                src={meal?.imageUrl || "/images/meal.webp"}
                alt={meal?.name || "image of a meal"}
                height={500}
                width={600}
              />
            </div>
          </div>

          <div className='flex flex-col '>
            <div className=''>
              <h3 className=' text-4xl font-light tracking-wide mb-6'>
                {meal?.name}
              </h3>

              <p>{meal?.description}</p>

              <div className='flex my-4 gap-2'>
                <span className='bg-custom-green text-center text-xs text-white p-2  font-normal tracking-wider rounded-full'>
                  {meal?.category}
                </span>

                <button
                  onClick={() => handleAddMeal(meal)}
                  className='text-white p-2 text-xs w-fit text-center block font-normal tracking-wider rounded-full bg-[#FFA726] hover:bg-[#FB8C00]'
                >
                  Add to Meal Plan
                </button>
              </div>
            </div>
            <div className='flex items-start gap-16'>
              <div className='ingredients  my-4'>
                <p className='text-2xl tracking-wide mb-2'>Ingredients</p>
                <ul className='flex gap-4 flex-col ml-4'>
                  {meal?.ingredients.map((ingredient: any, index: number) => (
                    <li className='capitalize list-decimal text-xs' key={index}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-4 shadow-md'>
                <table className='w-full text-sm text-center text-gray-100 dark:text-gray-400 '>
                  <thead className='text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white'>
                    <tr>
                      <th scope='col' className='py-3 px-12'>
                        Nutrient
                      </th>
                      <th scope='col' className='py-3 px-12'>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object?.entries(
                      meal?.nutritionalValues as Record<string, number | string>
                    ).map(([key, value], index) => (
                      <tr key={index} className='bg-white'>
                        <td className='py-2 px-12 capitalize'>{key}</td>
                        <td className='py-2 px-12'>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
