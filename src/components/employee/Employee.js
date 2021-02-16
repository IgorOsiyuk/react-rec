import { Link } from "react-router-dom";
import "./employee.scss";
const Employee = (props) => {
    const { person } = props;
    return (
        <div className="staff_item staff-item">
            <div className="staff-item_img">
                <img src={person.avatar}></img>
            </div>
            <div className="staff-item_personal-data personal-data">
                <div className="personal-data_first-name">
                    {person.first_name}
                </div>
                <div className="personal-data_last-name">
                    {person.last_name}
                </div>
            </div>
            <div className="staff-item_contacts contacts">
                <a
                    href={`mailto:${person.email}`}
                    target="_blank"
                    className="contacts_email"
                >
                    {person.email}
                </a>
            </div>
        </div>
    );
};

export default Employee;
