import FetchData from './../utility/fetchData';

export default function CreateAccount() {
  
  const { data, isLoading, isError } = FetchData('https://vb-react-exam.netlify.app/api/form')

  if (isLoading) return '<Spinner />'
  if (isError) return '<Error />'

  return (
    <div>
      <h2>{data.data[0].type}</h2>
    </div>
  );
}
