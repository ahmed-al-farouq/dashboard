import React from "react";
// Components
import BasePerformanceCard from "../components/BasePerformanceCard";
import PerformanceChart from "../components/PerformanceChart";
import ProjectsChart from "../components/ProjectsChart";
import BaseTable from "../components/BaseTable";
import { CgPerformance } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import { AiFillProject, AiFillMoneyCollect } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks";

const Dashboard = () => {
  const employeesHeaders = [
    "Name",
    "Position",
    "Age",
    "Starting Date",
    "Salary",
    "Status",
  ];
  const projectsHeaders = ["Name", "Budget", "Deadline", "Team Number"];
  const employees = useAppSelector((state) => state.employees.employees);
  const projects = useAppSelector((state) => state.projects.projects);
  return (
    <main className="container">
      <div className="row">
        <div className="cards d-flex flex-wrap justify-content-center justify-content-md-between">
          <BasePerformanceCard
            title="Total Projects"
            value="250"
            icon={<AiFillProject />}
            incrementPercent="33.3%"
            time="Since Last Month"
          />
          <BasePerformanceCard
            title="New Clients"
            value="30"
            icon={<IoMdPersonAdd />}
            incrementPercent="40%"
            time="Since Last Month"
          />
          <BasePerformanceCard
            title="Sales"
            value="150"
            icon={<AiFillMoneyCollect />}
            incrementPercent="50%"
            time="Since Last Month"
          />
          <BasePerformanceCard
            title="Performance"
            value="200%"
            icon={<CgPerformance />}
            incrementPercent="100%"
            time="Since Last Month"
          />
        </div>
        <div className="charts d-flex flex-wrap justify-content-between">
          <div>
            <PerformanceChart />
          </div>
          <div>
            <ProjectsChart />
          </div>
        </div>
        <BaseTable
          tableTitle="Our Employees"
          tableHeaders={employeesHeaders}
          employees={employees}
          all={false}
          projects={[]}
          colSpan={7}
        />
        <BaseTable
          tableTitle="Our Projects"
          tableHeaders={projectsHeaders}
          employees={[]}
          projects={projects}
          all={false}
          colSpan={5}
        />
      </div>
    </main>
  );
};

export default Dashboard;
