import { useEffect } from 'react';
import { Link, useNavigate, useParams, } from 'react-router-dom';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.courseSlug);
  useEffect(() => {
    if (!course) {
      navigate('..', {relative: 'path'})
    }
  }, [course, navigate])

  // //  simply show NotFound component
  // if (!course) {
  //   return <NotFound />
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* <Link to="/courses">All courses</Link> */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
