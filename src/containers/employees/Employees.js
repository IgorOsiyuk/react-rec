import React, { Component } from "react";
import { connect } from "react-redux";
import Employee from "../../components/employee";
import stateActions from "../../redux/actions";
import Button from "../../components/button";
import "./employees.scss";

// данные для добавления нового пользователя и запись их в store
const newPerson = {
    id: Math.round(Math.random() * 100),
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
};

class Employees extends Component {
    componentDidMount() {
        const { getAllStaffList_service } = this.props;
        getAllStaffList_service();
    }
    render() {
        const { list, addNewPerson, deletePerson } = this.props;

        return (
            <div className="container">
                <div className="staff">
                    {list.map((item, index) => {
                        return <Employee key={index} person={item} />;
                    })}
                </div>
                <div className="group-btn">
                    <Button
                        className="primary"
                        action={addNewPerson}
                        payload={newPerson}
                        textBtn="Добавить пользователя"
                    />
                    <Button
                        className="delete"
                        action={deletePerson}
                        payload={newPerson.id}
                        textBtn="Удалить пользователя"
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.staffList.list,
    };
};

const mapDispatchToProps = {
    getAllStaffList_service: stateActions.getAllStaffList_service,
    addNewPerson: stateActions.addNewPerson,
    deletePerson: stateActions.deletePerson,
};
export default connect(mapStateToProps, mapDispatchToProps)(Employees);
