import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import "../style/product.css";
import shop from "../assets/logo/ShoppingBag.png";
import banklogo from "../assets/image/logomandiri.jpg";
import help from "../assets/logo/Help.png";

const Product = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <NavbarComponent title={"Product"} />

      {/* product header */}
      <div className="product-header">
        <p>Bank</p>
        <p>Developer</p>
      </div>

      {/* product list */}
      <div className="product-list pt-4 ps-4 pe-5">
        <div className="shadow-sm">
          <img src={shop} alt="" />
          <p>KPR dan Multiguna</p>
        </div>
        <div className="shadow-sm">
          <img src={shop} alt="" />
          <p>Refinancing</p>
        </div>
        <div className="shadow-sm">
          <img src={shop} alt="" />
          <p>Kredit Modal Usaha dan Investasi</p>
        </div>
        <div className="shadow-sm">
          <img src={shop} alt="" />
          <p>Deposito</p>
        </div>
        <div className="shadow-sm">
          <img src={shop} alt="" />
          <p>Take Over dan Bridging Loan</p>
        </div>
      </div>

      {/* form group */}
      <div className="form pt-4 ps-4 pe-5">
        <input
          className="search shadow-sm"
          type="text"
          placeholder="Cari berdasarkan nama"
        />
        <select className="select shadow-sm" name="" id="">
          <option value="">Kredit Kepemilikan</option>
        </select>
        <input className="sort shadow-sm" placeholder="Sort  ⬇️⬆️" />
        <button className="btn-add shadow-sm">+ Tambah Product</button>
      </div>

      {array.map((index) => (
        <>
          {/* bank product */}
          <div className="bank-product-container pt-4 ps-4 pe-5 ">
            <div className="bank-product shadow-sm">
              <div className="bag-1 ">
                <div className="bank-logo mx-auto">
                  <img src={banklogo} alt="" />
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <div className="text-center">
                    <p>Rating :</p>
                    <p className="star">⭐⭐⭐⭐⭐</p>
                    <p className="p1">14 Reviews</p>
                  </div>
                  <div className="vertical-line"></div>
                  <div className="text-center">
                    <p>User :</p>
                    <p className="p1">220</p>
                    <p className="p1">user yearly</p>
                  </div>
                </div>
              </div>
              <div className="bag-2">
                <h6 className="mb-4">
                  <span style={{ color: "black" }}>Mandiri </span>Bunga Spesial
                  Tengah Imlek 2023
                </h6>
                <div className="d-flex gap-5">
                  <div>
                    <div className="d-flex gap-1">
                      <p className="icon">⌂</p>{" "}
                      <p className="pt-1">Fix Rate (Year) 3.38</p>
                    </div>
                    <div className="d-flex gap-1">
                      <p className="icon me-1">⌂</p>{" "}
                      <p className="pt-1">Fix Loan</p>
                    </div>
                    <div className="d-flex gap-1">
                      <p className="icon me-1">⌂</p>{" "}
                      <p className="pt-1">Max Tenor:12</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex gap-1">
                      <p className="icon me-1">⌂</p>{" "}
                      <p className="pt-1">
                        Jaminan:Ruko,Rukan,Rumah,Apartement
                      </p>
                    </div>
                    <div className="d-flex gap-1">
                      <p className="icon me-1">⌂</p>{" "}
                      <p className="pt-1">Target:Karyawan,Mahasiswa</p>
                    </div>
                    <div className="d-flex gap-1">
                      <p className="icon me-1">⌂</p>{" "}
                      <p className="pt-1">Komisi:1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bag-3 d-flex justify-content-center align-items-center">
                <button className="shadow-sm">Detail</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Product;
