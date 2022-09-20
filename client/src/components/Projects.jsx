import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((pr) => (
            <ProjectCard key={pr.id} project={pr} />
          ))}
        </div>
      ) : (
        <p className="mt-2">No Projects</p>
      )}
    </>
  );
}

export default Projects;
