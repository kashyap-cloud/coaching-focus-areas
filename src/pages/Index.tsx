import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { coachingAreas, type CoachingArea, type Exercise } from "@/data/coachingAreas";
import { exerciseTemplates, exerciseTitleToTemplateId } from "@/data/exerciseTemplates";
import { learnContent } from "@/data/learnContent";
import { resourcesContent } from "@/data/resourcesContent";
import CoachingAreaCard from "@/components/CoachingAreaCard";
import CoachingAreaDetail from "@/components/CoachingAreaDetail";
import ExerciseDetail from "@/components/ExerciseDetail";
import LearnDetail from "@/components/LearnDetail";
import ResourceDetail from "@/components/ResourceDetail";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState<CoachingArea | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedLearn, setSelectedLearn] = useState<{ areaId: string; index: number } | null>(null);
  const [selectedResource, setSelectedResource] = useState<{ areaId: string; type: "tips" | "quotes" | "ebooks" } | null>(null);

  const handleExerciseClick = (exercise: Exercise) => {
    const templateId = exerciseTitleToTemplateId[exercise.title];
    if (templateId && exerciseTemplates[templateId]) {
      setSelectedExercise(exercise);
    }
  };

  const handleLearnClick = (areaId: string, learnIndex: number) => {
    if (learnContent[areaId]?.[learnIndex]) {
      setSelectedLearn({ areaId, index: learnIndex });
    }
  };

  const handleResourceClick = (areaId: string, resourceType: "tips" | "quotes" | "ebooks") => {
    if (resourcesContent[areaId]) {
      setSelectedResource({ areaId, type: resourceType });
    }
  };

  const handleExerciseBack = () => setSelectedExercise(null);
  const handleLearnBack = () => setSelectedLearn(null);
  const handleResourceBack = () => setSelectedResource(null);
  const handleAreaBack = () => {
    setSelectedArea(null);
    setSelectedExercise(null);
    setSelectedLearn(null);
    setSelectedResource(null);
  };

  const activeTemplate = selectedExercise
    ? exerciseTemplates[exerciseTitleToTemplateId[selectedExercise.title]]
    : null;

  const activeLearnArticle = selectedLearn
    ? learnContent[selectedLearn.areaId]?.[selectedLearn.index]
    : null;

  const activeResources = selectedResource
    ? resourcesContent[selectedResource.areaId]
    : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-4 py-6 sm:max-w-2xl">
        <AnimatePresence mode="wait">
          {activeTemplate && selectedExercise ? (
            <ExerciseDetail
              key={activeTemplate.id}
              template={activeTemplate}
              onBack={handleExerciseBack}
            />
          ) : activeLearnArticle ? (
            <LearnDetail
              key={activeLearnArticle.id}
              article={activeLearnArticle}
              onBack={handleLearnBack}
            />
          ) : activeResources && selectedResource ? (
            <ResourceDetail
              key={`${selectedResource.areaId}-${selectedResource.type}`}
              areaId={selectedResource.areaId}
              resourceType={selectedResource.type}
              resources={activeResources}
              onBack={handleResourceBack}
            />
          ) : selectedArea ? (
            <CoachingAreaDetail
              key={selectedArea.id}
              area={selectedArea}
              onBack={handleAreaBack}
              onExerciseClick={handleExerciseClick}
              onLearnClick={handleLearnClick}
              onResourceClick={handleResourceClick}
            />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-card coaching-card-shadow">
                  <ArrowLeft className="h-5 w-5 text-foreground" />
                </button>
                <h1 className="text-2xl font-bold text-foreground">Coaching Areas</h1>
              </div>
              <p className="mb-6 text-center text-sm text-muted-foreground">
                What coaching focus interests you?
              </p>
              <div className="grid grid-cols-3 gap-4">
                {coachingAreas.map((area, i) => (
                  <CoachingAreaCard
                    key={area.id}
                    area={area}
                    index={i}
                    onClick={setSelectedArea}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
