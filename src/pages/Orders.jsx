import {
  GridComponent,
  ColumnsDirective,
  Resize,
  ColumnDirective,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

import { Header } from "../components";

const Orders = () => {
  return (
    <div className="p-2 m-2 md:m-10 mt-24 md:p-10 rounded-3xl bg-white">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridmap"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            PdfExport,
            Edit,
            Page,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
