import React from "react";
import MainLayout from "../mainLayouts/MainLayout";
import user from "../assets/image/user.png";
import "../style/dashboard.css";
import file from "../assets/logo/File.png";
import pie from "../assets/image/pie.png";
import top5 from "../assets/image/top5chart.png";
import pie2 from "../assets/image/pie2.png";
import NavbarComponent from "../components/NavbarComponent";

const Dashboard = () => {
  return (
    <>
    <NavbarComponent title={"Dashboard"}/>
      <div className="dashboard-header">
        <div>
          <img src={user} alt="" />
        </div>
        <div>
          <p className="name">YOHANES AFFANDI (JOJO)</p>
          <div className="d-flex description">
            <div className="pe-4 half-border">
              <div className="d-flex gap-2">
                <img src={file} alt="" />
                <p>Loan market offive dev</p>
              </div>
              <div className="d-flex gap-2">
                <img src={file} alt="" />
                <p>LM9990001</p>
              </div>
            </div>
            <div className="ps-4">
              <div className="d-flex gap-2">
                <img src={file} alt="" />
                <p>it@loanmarket.co.id</p>
              </div>
              <div className="d-flex gap-2">
                <img src={file} alt="" />
                <p>08123434343</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="main">
          <div className="d-flex">
            <div className="d-flex justify-content-center colleagues align-items-center gap-3 p-3 shadow-sm">
              <div>
                <img className="contact-image" src={file} alt="" />
              </div>
              <div className="text-center">
                <p className="p1">CONTACT</p>
                <p className="p2">51</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center colleagues gap-3 p-3 shadow-sm">
              <div>
                <img  className="contact-image" src={file} alt="" />
              </div>
              <div className="text-center">
                <p className="p1">LOAN</p>
                <p className="p2">51</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center  colleagues gap-3 p-3 shadow-sm">
              <div>
                <img  className="contact-image" src={file} alt="" />
              </div>
              <div className="text-center">
                <p className="p1">PRODUCT</p>
                <p className="p2">51</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center colleagues gap-2 p-3 shadow-sm">
              <div>
                <img  className="contact-image" src={file} alt="" />
              </div>
              <div className="text-center">
                <p className="p1">BANK</p>
                <p className="p2">51</p>
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 chart-pinjaman shadow-sm">
            <div>
              <p>PINJAMAN DISETUJUI</p>
              <div className="image-container">
                <img className="chart1-img" src={pie} alt="" />
                <p className="text-overlay">20%</p>
              </div>
              <p>2/5 Pinjaman telah disetujui</p>
            </div>
            <div className="vertical-line"></div>
            <div>
              <p>TARGET</p>
              <div className="image-container">
                <img className="chart1-img" src={pie2} alt="" />
                <p className="text-overlay">280%</p>
              </div>
              <p>Rp14.000.000.000,00 / Rp5.000.000.000</p>
            </div>
          </div>

          {/* top5 chart */}
          <div className="top5-chart shadow-sm">
            <p>Top 5 Bank Approval Tertinggi</p>
            <div className="top5-image-container">
              <img className="top5-image" src={top5} alt="" />
            </div>
          </div>
        </div>

        <div className="side">
          <div className="notification">
            <p className="mt-1 mb-1">NOTIFICATION</p>
            <ul>
              <div className="d-flex">
                <span className="pt-1">2 hrs</span>
                <li>
                  <p>admin_branch has updated</p>
                  <p className="small">Harry Handoko - Contact|MYCRM</p>
                </li>
              </div>
              <div className="d-flex">
                <span className="pt-1">2 hrs</span>
                <li>
                  <p>admin_branch has updated</p>
                  <p className="small">Harry Handoko - Contact|MYCRM</p>
                </li>
              </div>
              <div className="d-flex">
                <span className="pt-1">2 hrs</span>
                <li>
                  <p>admin_branch has updated</p>
                  <p className="small">Harry Handoko - Contact|MYCRM</p>
                </li>
              </div>
              <div className="d-flex">
                <span className="pt-1">2 hrs</span>
                <li>
                  <p>admin_branch has updated</p>
                  <p className="small">Harry Handoko - Contact|MYCRM</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
