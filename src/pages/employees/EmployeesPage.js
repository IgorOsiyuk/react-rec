import Navigation from "../../components/navigation";
import Employees from "../../containers/employees/Employees";

const EmployeesPage = () => {
    return (
        <div className="container">
            <Navigation />
            <Employees />
        </div>
    );
};

export default EmployeesPage;
