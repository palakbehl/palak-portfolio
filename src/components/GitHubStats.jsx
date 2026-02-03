import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

export const GitHubStats = () => {
  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Code</span> Contributions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My coding activity over the last year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 shadow-lg max-w-5xl mx-auto hover:border-primary/50 transition-colors"
        >
          <GitHubCalendar 
            username="palakbehl" 
            colorScheme="dark"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
            theme={{
              dark: [
                '#161b22', // Empty
                '#0e4429', // Low
                '#006d32', 
                '#26a641', 
                '#39d353', // High
              ],
            }}
            labels={{
              legend: {
                less: 'Less',
                more: 'More',
              },
              months: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
              ],
              totalCount: '{{count}} contributions in the last year',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
