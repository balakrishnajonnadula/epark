import { useEffect } from "react";
//jquery
import "/node_modules/jquery/dist/jquery.min.js";
//Datatable Modules
import "/node_modules/datatables.net-dt/js/dataTables.dataTables";
import "/node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

function App() {
  const handleDataTable = () => {
    $(document).ready(function () {
      $("#example").dataTable({
        "bDestroy": true
      });
    });
  };
  useEffect(() => {
    handleDataTable();
  });
  return (
    <div className="App text-center">
      <table
        
        border="0"
        className="display"
        id="example"
      >
        <thead>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd gradeX">
            <td>Trident</td>
            <td>Internet Explorer 4.0</td>
            <td>Win 95+</td>
            <td className="center"> 4</td>
            <td className="center">X</td>
          </tr>
          <tr className="even gradeC">
            <td>Trident</td>
            <td>Internet Explorer 5.0</td>
            <td>Win 95+</td>
            <td className="center">5</td>
            <td className="center">C</td>
          </tr>
          <tr className="odd gradeA">
            <td>Trident</td>
            <td>Internet Explorer 5.5</td>
            <td>Win 95+</td>
            <td className="center">5.5</td>
            <td className="center">A</td>
          </tr>
          <tr className="even gradeA">
            <td>Trident</td>
            <td>Internet Explorer 6</td>
            <td>Win 98+</td>
            <td className="center">6</td>
            <td className="center">A</td>
          </tr>
          <tr className="odd gradeA">
            <td>Trident</td>
            <td>Internet Explorer 7</td>
            <td>Win XP SP2+</td>
            <td className="center">7</td>
            <td className="center">A</td>
          </tr>
          <tr className="even gradeA">
            <td>Trident</td>
            <td>AOL browser (AOL desktop)</td>
            <td>Win XP</td>
            <td className="center">6</td>
            <td className="center">A</td>
          </tr>
          <tr className="gradeA">
            <td>Gecko</td>
            <td>Firefox 1.0</td>
            <td>Win 98+ / OSX.2+</td>
            <td className="center">1.7</td>
            <td className="center">A</td>
          </tr>
          <tr className="gradeA">
            <td>Gecko</td>
            <td>Firefox 1.5</td>
            <td>Win 98+ / OSX.2+</td>
            <td className="center">1.8</td>
            <td className="center">A</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
