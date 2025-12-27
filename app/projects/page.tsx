export default function ProjectsPage() {
  const budgetStyles = [
    "#budget{ margin-top: 28px; }",
    "#budget .table-wrap{ overflow:auto; border-radius:10px; }",
    "#budget table{ width:100%; border-collapse:collapse; background:linear-gradient(180deg,#fff,#fbfffc); border-radius:10px; overflow:hidden; }",
    "#budget th, #budget td{ padding:10px 12px; text-align:left; border-bottom:1px solid #f0f3f2; }",
    "#budget thead th{ background:#f7fbf9; font-weight:700; }",
  ].join("\n");

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: budgetStyles }} />
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Our Projections
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Project
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="px-5" id="budget">
        <h2 style={{ marginTop: "18px" }}>Estimated Budget</h2>
        <p className="muted">
          Below is a clear breakdown of school fees, basic needs and totals to
          help donors and partners understand funding priorities.
        </p>

        <div className="table-wrap" style={{ marginTop: "12px" }}>
          <table>
            <thead>
              <tr>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  No
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Name
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Age
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Sex
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Class
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  1st term (FRW)
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  2nd term (FRW)
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  3rd term (FRW)
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Year (FRW)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Irahipa</td>
                <td>6</td>
                <td>F</td>
                <td>N2</td>
                <td>12000</td>
                <td>12000</td>
                <td>12000</td>
                <td>36000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Irafa</td>
                <td>4</td>
                <td>M</td>
                <td>N1</td>
                <td>12000</td>
                <td>12000</td>
                <td>12000</td>
                <td>36000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Muhaclo</td>
                <td>9</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mukena</td>
                <td>13</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Irasi</td>
                <td>11</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Uwanedja</td>
                <td>15</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Tumusha</td>
                <td>15</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Uwili</td>
                <td>13</td>
                <td>F</td>
                <td>P3</td>
                <td>10000</td>
                <td>10000</td>
                <td>10000</td>
                <td>30000</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Impamuyana</td>
                <td>8</td>
                <td>F</td>
                <td>P4</td>
                <td>75400</td>
                <td>60000</td>
                <td>60000</td>
                <td>195400</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Shasa</td>
                <td>13</td>
                <td>M</td>
                <td>P4</td>
                <td>7000</td>
                <td>7000</td>
                <td>7000</td>
                <td>21000</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Dusoli</td>
                <td>19</td>
                <td>M</td>
                <td>S6</td>
                <td>46000</td>
                <td>46000</td>
                <td>46000</td>
                <td>138000</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Nsabijeba</td>
                <td>19</td>
                <td>M</td>
                <td>S6</td>
                <td>92000</td>
                <td>92000</td>
                <td>92000</td>
                <td>276000</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Niyoce</td>
                <td>16</td>
                <td>F</td>
                <td>S3</td>
                <td>21500</td>
                <td>19500</td>
                <td>19500</td>
                <td>60500</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Ufily</td>
                <td>17</td>
                <td>M</td>
                <td>S5</td>
                <td>200000</td>
                <td>200000</td>
                <td>200000</td>
                <td>600000</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Mugapa</td>
                <td>21</td>
                <td>F</td>
                <td>S5</td>
                <td>92000</td>
                <td>92000</td>
                <td>92000</td>
                <td>276000</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Iraro</td>
                <td>18</td>
                <td>M</td>
                <td>S4</td>
                <td>50000</td>
                <td>50000</td>
                <td>50000</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>17</td>
                <td>Kwijo</td>
                <td>14</td>
                <td>F</td>
                <td>P3</td>
                <td>52000</td>
                <td>52000</td>
                <td>52000</td>
                <td>156000</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Uwachi</td>
                <td>15</td>
                <td>F</td>
                <td>P3</td>
                <td>52000</td>
                <td>52000</td>
                <td>52000</td>
                <td>156000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  colSpan={8}
                  style={{
                    textAlign: "right",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  Totals
                </th>
                <th style={{ backgroundColor: "black", color: "orange" }}>
                  2,124,900 FRW
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="card p-2" style={{ marginTop: "18px" }}>
          <h3 style={{ marginTop: 0 }}>Basic needs & food provision</h3>
          <table style={{ marginTop: "8px" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Item
                </th>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Price (FRW)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clean water</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>Soap</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>Sugar</td>
                <td>160,000</td>
              </tr>
              <tr>
                <td>Oil</td>
                <td>140,000</td>
              </tr>
              <tr>
                <td>Lotion</td>
                <td>60,000</td>
              </tr>
              <tr>
                <td>Charcoal</td>
                <td>100,000</td>
              </tr>
              <tr>
                <td>Toothbrush</td>
                <td>40,000</td>
              </tr>
              <tr>
                <td>Sanitary pads</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>Towel</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>6,000</td>
              </tr>
              <tr>
                <td>Stewpot</td>
                <td>23,000</td>
              </tr>
              <tr>
                <td>Pan</td>
                <td>80,000</td>
              </tr>
              <tr>
                <td>Beans</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>Vegetables</td>
                <td>40,000</td>
              </tr>
              <tr>
                <td>Electricity</td>
                <td>40,000</td>
              </tr>
              <tr>
                <td>Fruits</td>
                <td>90,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th style={{ backgroundColor: "orange", color: "white" }}>
                  Total
                </th>
                <th style={{ backgroundColor: "black", color: "white" }}>
                  1,039,000 FRW
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
}
