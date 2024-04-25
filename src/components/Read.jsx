import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://6629578154afcabd07390658.mockapi.io/CRUD")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
     axios.delete(`https://6629578154afcabd07390658.mockapi.io/CRUD/${id}`)
     .then(() =>{
        getData()
     }).catch((error) => {
      console.log(error.message);
  })
  }

//localStroage  a data key hisabe save hoi
  const setDataToStorage = (id,name, email, age, ) => {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('age',age)
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2 ">
            <Link to="/create">
              <button className="btn btn-primary">Create new Data</button>
            </Link>
          </div>

          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT </th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((data) => {
                return (
                  <>
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.e_name}</td>
                      <td>{data.e_age}</td>
                      <td>{data.e_email}</td>
                      <td>
                         <Link to="/edit">
                              <button className="btn btn-primary" onClick={() => setDataToStorage(data.id, data.e_name, data.e_email, data.e_age)}>Edit</button>
                         </Link>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(data.id)} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
