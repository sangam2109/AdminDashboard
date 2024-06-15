// dashboardTable.tsx

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../../styles/dashboardTable.module.scss"
import face1 from "../../assets/images/faces/face1.jpg";
import face2 from "../../assets/images/faces/face2.jpg";
import face3 from "../../assets/images/faces/face3.jpg";
import face4 from "../../assets/images/faces/face4.jpg";
import Image from "next/image";

const DashboardTable: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Recent Tickets</h4>
            <TableContainer component={Paper}>
              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>Assignee</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Update</TableCell>
                    <TableCell>Tracking ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Image src={face1} className="mr-2" alt="face" />
                      David Grey
                    </TableCell>
                    <TableCell>Fund is not received</TableCell>
                    <TableCell>
                      <label className="badge badge-gradient-success">
                        DONE
                      </label>
                    </TableCell>
                    <TableCell>Dec 5, 2017</TableCell>
                    <TableCell>WD-12345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        src={face2}
                        className="mr-2"
                        alt="face"
                      />
                      Stella Johnson
                    </TableCell>
                    <TableCell>High loading time</TableCell>
                    <TableCell>
                      <label className="badge badge-gradient-warning">
                        PROGRESS
                      </label>
                    </TableCell>
                    <TableCell>Dec 12, 2017</TableCell>
                    <TableCell>WD-12346</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        src={face3}
                        className="mr-2"
                        alt="face"
                      />
                      Marina Michel
                    </TableCell>
                    <TableCell>Website down for one week</TableCell>
                    <TableCell>
                      <label className="badge badge-gradient-info">
                        ON HOLD
                      </label>
                    </TableCell>
                    <TableCell>Dec 16, 2017</TableCell>
                    <TableCell>WD-12347</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        src={face4}
                        className="mr-2"
                        alt="face"
                      />
                      John Doe
                    </TableCell>
                    <TableCell>Losing control on server</TableCell>
                    <TableCell>
                      <label className="badge badge-gradient-danger">
                        REJECTED
                      </label>
                    </TableCell>
                    <TableCell>Dec 3, 2017</TableCell>
                    <TableCell>WD-12348</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
