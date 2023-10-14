import { Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const CourseBenefits = () => {
  const benefits = [
    'Hands-On Learning',
    'Proven Reliability',
    'Risk-Free Exploration',
    'Flexible Scheduling',
    'Inclusive Learning',
    '24/7 helpline',
  ];
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto text-gray-700 relative z-20">
      <h2 className="text-3xl font-semibold mb-4">What you will Get</h2>
      <Grid container spacing={2} className="text-tiny justify-center">
        {benefits.map((element, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div className="flex items-center gap-2">
              <DoneIcon fontSize="small" className="text-green-500" />{' '}
              {/* Added text-green-500 for tick mark color */}
              <span className="font-bold">{element}</span>
            </div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};


export default CourseBenefits;