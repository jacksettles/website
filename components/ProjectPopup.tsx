// components/ProjectPopup.tsx
import React, { forwardRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectPopupProps {
  active: Project | null;
  setActive: (project: Project | null) => void;
}

const ProjectPopup = forwardRef<HTMLDivElement, ProjectPopupProps>(
  ({ active, setActive }, ref) => {
    const [description, setDescription] = useState<string | null>(null);

    useEffect(() => {
      if (active && active.isPopup) {
        const loadDescription = async () => {
          try {
            const desc = await active.popupContent;
            setDescription(desc);
          } catch (error) {
            console.error('Failed to load description:', error);
            setDescription('Failed to load description');
          }
        };
        loadDescription();
      } else {
        setDescription(null);
      }
    }, [active]);

    // If no active project or it doesn't use a popup
    if (!active || !active.isPopup) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="bg-white text-black p-8 rounded-lg max-w-[100vw] w-full max-h-[100vh] overflow-y-auto"
          >
            {/* Title, etc. */}
            <motion.h3
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-2"
            >
              {active.title}
            </motion.h3>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary mb-1"
            >
              {/* Could show technologies or something else */}
              {active.description}
            </motion.p>

            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border p-4 rounded-md"
            >
              {description ? (
                <div dangerouslySetInnerHTML={{ __html: description }} />
              ) : (
                <p>Loading...</p>
              )}
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 bg-primary text-primary-foreground px-4 py-2 rounded"
              onClick={() => setActive(null)}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

ProjectPopup.displayName = 'ProjectPopup';
export default ProjectPopup;