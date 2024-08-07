import Button from '../shared/components/UIElements/Button';
import links from '../shared/links';

const Education = () => {
  return (
    <div>
      <h2>Education Page</h2>
      <p>This is the education page.</p>
      <p>This page will have - 2f. Manual input form (Education team) - lines of text, calendar from teams?</p>
      <Button href={links['6a']}>6a: Education team Sharepoint site</Button>
      <Button href={links['6b']}>
        6b: Competency clinic booking form (microsoft team accessible on education team sharepoint site)
      </Button>
    </div>
  );
};

export default Education;
