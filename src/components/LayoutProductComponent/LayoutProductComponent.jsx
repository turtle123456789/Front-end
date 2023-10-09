import React, { useState } from "react";
import CardProductComponent from "../CardProductComponent/CardProductComponent";
import "./style.css"; // Import file CSS đã tạo

const LayoutProductComponent = ({ ProductData }) => {
  const [currentList, setCurrentList] = useState("lip");
  const [width, setWidth] = useState(1476);
  const maxProductsToShow = 10;
  const [activeButton, setActiveButton] = useState("lip"); // Trạng thái nút hiện tại

  const lipProducts = ProductData.filter((product) => product.type === "lip").slice(0, maxProductsToShow);
  const eyeProducts = ProductData.filter((product) => product.type === "eye").slice(0, maxProductsToShow);
  const faceProducts = ProductData.filter((product) => product.type === "face").slice(0, maxProductsToShow);

  return (
    <div>
      <div className="groupButton">
        <button
          className={`button ${activeButton === "lip" ? "active" : ""}`}
          onClick={() => {
            setCurrentList("lip");
            setWidth(1476);
            setActiveButton("lip"); // Cập nhật trạng thái nút hiện tại khi bấm vào nút
          }}
        >
          Trang điểm môi
        </button>
        <button
          className={`button ${activeButton === "eye" ? "active" : ""}`}
          onClick={() => {
            setCurrentList("eye");
            setWidth(1476);
            setActiveButton("eye"); // Cập nhật trạng thái nút hiện tại khi bấm vào nút
          }}
        >
          Trang điểm mắt
        </button>
        <button
          className={`button ${activeButton === "face" ? "active" : ""}`}
          onClick={() => {
            setCurrentList("face");
            setWidth(1476);
            setActiveButton("face"); // Cập nhật trạng thái nút hiện tại khi bấm vào nút
          }}
        >
          Trang điểm mặt
        </button>
      </div>

      <div
        className={`page ${currentList !== "lip" && "page-hidden"}`}
        style={{
          width: `${width}px`,
        }}
      >
        {/* Hiển thị danh sách trang điểm môi */}
        <div className="list-product">
          {lipProducts.map((product) => (
            <CardProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div
        className={`page ${currentList !== "eye" && "page-hidden"}`}
        style={{
          width: `${width}px`,
        }}
      >
        {/* Hiển thị danh sách trang điểm mắt */}
        <div className="list-product">
          {eyeProducts.map((product) => (
            <CardProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div
        className={`page ${currentList !== "face" && "page-hidden"}`}
        style={{
          width: `${width}px`,
        }}
      >
        {/* Hiển thị danh sách trang điểm mặt */}
        <div className="list-product">
          {faceProducts.map((product) => (
            <CardProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutProductComponent;
