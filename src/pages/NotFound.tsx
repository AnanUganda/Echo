import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-24 flex items-center">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Compass className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">
            Off the Beaten Path
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            We couldn't find the page you were looking for. It may have moved, or the link might be out of date.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-primary rounded-full text-lg font-medium hover:bg-accent transition-all hover:scale-105"
          >
            Return Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
