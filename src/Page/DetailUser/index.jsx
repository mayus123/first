import React from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { config } from "../../config.js";

const DetailUser = (props) => {
  let { id } = useParams();
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
    } catch {
      props.history.push("/UserNotFound");
    }
  };

  const NextHandle = () => {
    let nextId = parseInt(id, 10) + 1;
    console.log(nextId);
    props.history.push(`/DetailUser/${nextId}`);
  };
  const PreHandle = () => {
    let preId = parseInt(id, 10) - 1;
    props.history.push(`/DetailUser/${preId}`);
  };

  return (
    <React.Fragment>
      <div className="container">
        <img className="rounded-circle" src={user.avatar} alt="" />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <h4>{user.email}</h4>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="btn-success "
            disabled={id < 2}
            onClick={PreHandle}
          >
            Previous
          </button>
          <button className="btn-success " onClick={NextHandle}>
            Next
          </button>
          <Link to="/">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
