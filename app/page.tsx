"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [trainStep, setTrainStep] = useState(1);
  const [exercises, setExercises] = useState([
    {
      group: "chest",
      isSelected: false,
      exercises: [
        { name: "bench press", chosen: false },
        { name: "incline dumbbell press", chosen: false },
        { name: "dumbbell chest fly", chosen: false },
        { name: "chest fly", chosen: false },
        { name: "decline bench press", chosen: false },
        { name: "dumbbell chest press", chosen: false },
        { name: "pushup", chosen: false },
        { name: "dumbbell flyes", chosen: false },
        { name: "dumbbell bench press", chosen: false },
        { name: "dips", chosen: false },
        { name: "cable crossover", chosen: false },
        { name: "incline pushup", chosen: false },
        { name: "decline pushup", chosen: false },
        { name: "traveling plank", chosen: false },
      ],
    },
    {
      group: "back",
      isSelected: false,
      exercises: [
        { name: "lat pulldown", chosen: false },
        { name: "one arm dumbbell row", chosen: false },
        { name: "pull-ups", chosen: false },
        { name: "cable row", chosen: false },
        { name: "seated row", chosen: false },
        { name: "dumbbell row", chosen: false },
        { name: "reverse fly", chosen: false },
        { name: "barbell row", chosen: false },
        { name: "T-bar row", chosen: false },
        { name: "Bent-over dumbbell row", chosen: false },
        { name: "bent over barbell row", chosen: false },
        { name: "inverted row", chosen: false },
        { name: "trap-bar deadlift", chosen: false },
        { name: "dumbbell shrugs", chosen: false },
      ],
    },
    {
      group: "biceps",
      isSelected: false,
      exercises: [
        { name: "concentration curl", chosen: false },
        { name: "machine preacher curl", chosen: false },
        { name: "zottman curl", chosen: false },
        { name: "barbell curls", chosen: false },
        { name: "hammer curl", chosen: false },
        { name: "bicep curl", chosen: false },
        { name: "chin up", chosen: false },
        { name: "EZ bar curl", chosen: false },
        { name: "spider curl", chosen: false },
        { name: "alternate biceps curl", chosen: false },
        { name: "reverse curl", chosen: false },
        { name: "inverted row", chosen: false },
        { name: "incline bumbbell curl", chosen: false },
        { name: "incline curls", chosen: false },
        { name: "band curl", chosen: false },
        { name: "cable bicep curl", chosen: false },
        { name: "alternating incline dumbbell curl", chosen: false },
        { name: "preacher hammer dumbbell curl", chosen: false },
      ],
    },
    {
      group: "triceps",
      isSelected: false,
      exercises: [
        { name: "triceps pushdown", chosen: false },
        { name: "skull crushers", chosen: false },
        { name: "rope pushdowns", chosen: false },
        { name: "tricep dips", chosen: false },
        { name: "tricep extensions", chosen: false },
        { name: "dumbbell lying triceps extension", chosen: false },
        { name: "dumbbell triceps kickback", chosen: false },
        { name: "lying triceps extensions", chosen: false },
        { name: "pushups", chosen: false },
        { name: "close-grip push-up", chosen: false },
        { name: "diamond pushup", chosen: false },
        { name: "cable rope extension", chosen: false },
        { name: "close grip bench press", chosen: false },
        { name: "bodyweight triceps extension", chosen: false },
        { name: "overhead tricep extension", chosen: false },
        { name: "dips", chosen: false },
        { name: "one-arm overhead extension", chosen: false },
        { name: "bench dip", chosen: false },
        { name: "cable kickback", chosen: false },
      ],
    },
    {
      group: "abs",
      isSelected: false,
      exercises: [
        { name: "sit-up", chosen: false },
        { name: "seated ab crunch machine", chosen: false },
        { name: "decline sit-up", chosen: false },
        { name: "dip/leg raise", chosen: false },
        { name: "crunch", chosen: false },
        { name: "plank", chosen: false },
        { name: "V-ups", chosen: false },
        { name: "bicycle crunch", chosen: false },
        { name: "hollow hold", chosen: false },
        { name: "reverse crunch", chosen: false },
        { name: "leg raise", chosen: false },
        { name: "medicine ball slam", chosen: false },
        { name: "barbell ab rollout", chosen: false },
        { name: "exercise ball crunch", chosen: false },
        { name: "hollow rock", chosen: false },
        { name: "navasana", chosen: false },
        { name: "cable crunch", chosen: false },
        { name: "dead bug", chosen: false },
        { name: "butterfly sit up", chosen: false },
        { name: "bird dog exercise", chosen: false },
      ],
    },
    { group: "shoulders", isSelected: false },
    {
      group: "legs",
      isSelected: false,
      exercises: [
        { name: "leg press", chosen: false },
        { name: "leg extension", chosen: false },
        { name: "leg curl", chosen: false },
        { name: "calf raises", chosen: false },
        { name: "back squat", chosen: false },
        { name: "bulgarian split squat", chosen: false },
        { name: "goblet squat", chosen: false },
        { name: "romanian deadlift", chosen: false },
        { name: "glute bridge", chosen: false },
        { name: "dumbbell step up", chosen: false },
        { name: "walking lunge with overhead weight", chosen: false },
        { name: "dumbbell squat", chosen: false },
        { name: "deadlift", chosen: false },
        { name: "dumbbell split squat", chosen: false },
        { name: "lateral lunge", chosen: false },
        { name: "split squats", chosen: false },
        { name: "jump squat", chosen: false },
        { name: "rear foot elevated split squat", chosen: false },
        { name: "isometric calf raise", chosen: false },
        { name: "stiff-legged dumbbell deadlift", chosen: false },
        { name: "dumbbell deadlift", chosen: false },
        { name: "walking lunges", chosen: false },
        { name: "sumo squat", chosen: false },
        { name: "goblet squat", chosen: false },
        { name: "reverse lunge", chosen: false },
        { name: "front squat", chosen: false },
        { name: "hamstring curl", chosen: false },
        { name: "box step up", chosen: false },
        { name: "squats and lunges", chosen: false },
        { name: "standing dumbbell calf raise", chosen: false },
        { name: "rear lunge", chosen: false },
        { name: "stiff-legged deadlift", chosen: false },
        { name: "barbell glute bridge", chosen: false },
        { name: "cyclist squat", chosen: false },
        { name: "step up", chosen: false },
        { name: "front foot elevated split step", chosen: false },
        { name: "rear foot elevated split squat", chosen: false },
        { name: "squat", chosen: false },
        { name: "romanian deadlift with dumbbells", chosen: false },
        { name: "single leg deadlift", chosen: false },
        { name: "side lunge", chosen: false },
        { name: "hip thrust", chosen: false },
        { name: "dumbbell walking lunge", chosen: false },
        { name: "barbell squat", chosen: false },
        { name: "kettlebell swing", chosen: false },
      ],
    },
  ]);

  const displayGroupExercises = (group) => {
    setExercises(
      exercises.map((item) =>
        item.group === group ? { ...item, isSelected: !item.isSelected } : item,
      ),
    );
  };

  const addOrRemoveExercise = (exercise, group) => {
    setExercises(
      exercises.map((item) =>
        item.group === group.group
          ? {
              ...item,
              exercises: item.exercises.map((subItem) =>
                subItem.name === exercise
                  ? { ...subItem, chosen: !subItem.chosen }
                  : subItem,
              ),
            }
          : item,
      ),
    );
  };

  const submitTrain = () => {
    if (trainStep === 1) {
      setTrainStep(2);
    }
    if (trainStep === 2) {
      setExercises(
        exercises.map((item) => {
          return { ...item, isSelected: false };
        }),
      );
      setTrainStep(1);
    }
  };

  const updateExercise = (exercise, setOrReps, value) => {
    // takes selected number of sets, eg. 3, and creates an array of objects one for each set ->
    // [{set:1, reps: 0}, {set:2, reps: 0}...]
    console.log("UPDATE EXERCISE CALLED");
    let arrayOfSets = [];
    for (let i = value; i > 0; i--) {
      arrayOfSets.push({ set: i, reps: 0 });
      console.log("ARRAY OF SETS, value:", value);
    }
    setExercises(
      exercises.map((groupExercises) => ({
        ...groupExercises,
        exercises: groupExercises.exercises?.map((oneExercise) =>
          oneExercise.name === exercise.name
            ? { ...oneExercise, arrayOfSets }
            : oneExercise,
        ),
      })),
    );
    console.log("arrayOfSets:::", arrayOfSets);

    // console.log(
    //   "clicked confirm number sets, exercise:",
    //   "exerciseL",
    //   exercise,
    //   "sets:",
    //   numSets,
    //   "value:",
    //   value,
    //   "testAddSetsToExercises:",
    //   testAddSetsToExercises,
    // );
  };

  const confirmNumberOfSets = (sets) => {
    console.log("confirmNumberOfSets, sets:", sets);
  };

  //const setsRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const setsRange = (range) => {
    let rangeArray = [];
    for (let i = 0; i > range; i--) {
      rangeArray.push(i);
    }
    return rangeArray;
  };

  const addSelectOptions = (numberofOptions) => {
    console.log("addSelectedOptions called");
    for (let i = numberofOptions; i < 0; i--) {
      return <option>{i}</option>;
    }
  };

  const testMe = (number) => {
    // Describe the loop
    // function receives a number eg. 5
    // takes this number
    let arrayOfOptions = [];
    for (let i = 1; i <= number; i++) {
      arrayOfOptions.push(i);
    }
    console.log("testMe, arrayOfOptions:", arrayOfOptions);
    return arrayOfOptions;
  };

  const addRepetitionPerSet = (repetitions, exercise, oneSet) => {
    console.log(
      "addRepetitions, repetitions:",
      repetitions,
      "exercise:",
      exercise,
      "oneSet:",
      oneSet,
    );
    setExercises(
      exercises.map((groupExercises) => ({
        ...groupExercises,
        exercises: groupExercises.exercises?.map((oneExercise) =>
          oneExercise.name === exercise.name
            ? {
                ...oneExercise,
                arrayOfSets: oneExercise.arrayOfSets?.map((set) =>
                  set.set === oneSet.set ? { ...set, reps: repetitions } : set,
                ),
              }
            : oneExercise,
        ),
      })),
    );
  };

  const addWeightToSet = (weightValue, exercise, oneSet) => {
    // console.log(
    //   "weightValue:",
    //   weightValue,
    //   "exercise:",
    //   exercise,
    //   "oneSet:",
    //   oneSet,
    // );
    setExercises(
      exercises.map((groupExercises) => ({
        ...groupExercises,
        exercises: groupExercises.exercises?.map((oneExercise) =>
          oneExercise.name === exercise.name
            ? {
                ...oneExercise,
                arrayOfSets: oneExercise.arrayOfSets?.map((set) =>
                  set.set === oneSet.set
                    ? { ...set, weight: weightValue }
                    : set,
                ),
              }
            : oneExercise,
        ),
      })),
    );
  };

  useEffect(() => {
    console.log("useEffect, exercises:", exercises);
  }, [exercises, trainStep]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Gym-Wizer
          </h1>

          {
            <div>
              <div>
                {/* {exercises?.find((group) =>
                  group.exercises?.find((exercise) => exercise.chosen),
                )
                  ? "Selected Exercises"
                  : "Add exercises"} */}
              </div>
              {exercises.map((item, i) => (
                <div key={i}>
                  <h2>
                    {item.exercises?.find((exercise) => exercise.chosen) &&
                      item.group}
                  </h2>

                  <div>
                    {" "}
                    {item.exercises &&
                      item.exercises.map((exercise, i) =>
                        exercise.chosen ? (
                          <div key={i}>
                            {trainStep === 2 && (
                              <div>
                                {/* <label>Sets </label>
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    updateExercise(
                                      exercise,
                                      "sets",
                                      Number(e.target.value),
                                    )
                                  }
                                /> */}
                                {/* <select>
                                    {setsRange.map((oneOption) => (
                                      <option>{oneOption}</option>
                                    ))}
                                  </select> */}
                                {exercise.name} - remove -Sets:{" "}
                                <label>SETS </label>{" "}
                                <select
                                  onChange={(e) =>
                                    updateExercise(
                                      exercise,
                                      "sets",
                                      Number(e.target.value),
                                    )
                                  }
                                >
                                  <option>Chose a number</option>
                                  {testMe(10).map((index, i) => (
                                    <option key={i}>{index}</option>
                                  ))}
                                </select>
                                <div>
                                  {" "}
                                  {/* <button
                                    onClick={() =>
                                      confirmNumberOfSets(exercise.sets)
                                    }
                                  >
                                    Confirm
                                  </button> */}
                                </div>
                              </div>
                            )}
                            <div>
                              {exercise.arrayOfSets &&
                                exercise.arrayOfSets.map((oneSet, i) => (
                                  <div key={i}>
                                    <ul>Set {oneSet.set}</ul>
                                    <label>Reps:</label>
                                    <input
                                      type="number"
                                      onChange={(e) =>
                                        addRepetitionPerSet(
                                          Number(e.target.value),
                                          exercise,
                                          oneSet,
                                        )
                                      }
                                    />
                                    <label>Weight (kg):</label>
                                    <input
                                      type="number"
                                      onChange={(e) =>
                                        addWeightToSet(
                                          Number(e.target.value),
                                          exercise,
                                          oneSet,
                                        )
                                      }
                                    />
                                  </div>
                                ))}
                            </div>
                            <label>{exercise.name}</label>
                            <button
                              onClick={() =>
                                addOrRemoveExercise(exercise.name, item)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        ) : null,
                      )}
                  </div>
                </div>
              ))}
            </div>
          }

          {trainStep === 1 &&
            exercises.length &&
            exercises.map((group, i) => (
              <div key={i}>
                <button onClick={() => displayGroupExercises(group.group)}>
                  {group.group}
                </button>
                {group.isSelected &&
                  group?.exercises?.map((item, j) => (
                    <div key={j}>
                      <ul onClick={() => addOrRemoveExercise(item.name, group)}>
                        {item.name} {!item.chosen ? "+" : "-"}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Image
            className="dark:invert h-[14px] w-4"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={14}
          />
          <div className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            <button onClick={() => submitTrain()}>
              {trainStep === 1 ? "Confirm train" : "Return"}
            </button>
          </div>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            More
          </a>
        </div>
      </main>
    </div>
  );
}
