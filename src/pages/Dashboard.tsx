import React from 'react';
// Components
import BasePerformanceCard from '../components/BasePerformanceCard';
import PerformanceChart from '../components/Dashboard/PerformanceChart';
import ProjectsChart from '../components/Dashboard/ProjectsChart';
import BaseTable from '../components/BaseTable';
import { CgPerformance } from 'react-icons/cg';
import { IoMdPersonAdd } from 'react-icons/io';
import { AiFillProject, AiFillMoneyCollect } from 'react-icons/ai';
import { useAppSelector } from '../redux/hooks';

const Dashboard = () => {
  const employeesHeaders = ["Name", "Position", "Age", "Starting Date", "Salary", "Status"];
  const projectsHeaders = ["Name", "Budget", "Deadline", "Team"];
  const employees = useAppSelector((state) => state.employees.employees);
  const projects = useAppSelector((state) => state.projects.projects);
  return (
    <section className="container">
      <div className="row">
        <div className="cards d-flex flex-wrap justify-content-center justify-content-md-between">
          <BasePerformanceCard title="Total Projects" value="250" icon={<AiFillProject />} incrementPercent="33.3%" time="Since Last Month" />
          <BasePerformanceCard title="New Clients" value="30" icon={<IoMdPersonAdd />} incrementPercent="40%" time="Since Last Month" />
          <BasePerformanceCard title="Sales" value="150" icon={<AiFillMoneyCollect />} incrementPercent="50%" time="Since Last Month" />
          <BasePerformanceCard title="Performance" value="200%" icon={<CgPerformance />} incrementPercent="100%" time="Since Last Month" />
        </div>
        <div className="charts d-flex flex-wrap justify-content-between">
          <div>
            <PerformanceChart />
          </div>
          <div>
            <ProjectsChart />
          </div>
        </div>
        <BaseTable tableTitle={'Our Employees'} tableHeaders={employeesHeaders} employees={employees} projects={[]} colSpan={7} />
        <BaseTable tableTitle={'Our Projects'} tableHeaders={projectsHeaders} employees={[]} projects={projects} colSpan={5} />
      </div>
    </section>
  );
}

export default Dashboard;