import React, {FC} from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button";


const dataSource = [
    {
        date: "22-02-2022",
        time:"10:00 PM",
        ipAddress: "192.162.20.22",
        changeMade:"Success at first attempt"
    },
    {
        date: "22-02-2022",
        time:"08:32 AM",
        ipAddress: "192.162.20.22",
        changeMade:"Disconnection"
    },
    {
        date: "22-02-2022",
        time:"09:23 PM",
        ipAddress: "192.162.20.22",
        changeMade:"Success at first attempt"
    },
    {
        date: "22-02-2022",
        time:"11:00 PM",
        ipAddress: "192.162.20.22",
        changeMade:"Disconnection"
    }
];

interface accountActivityProps {
    date? : string,
    time? : string,
    ipAddress? :string,
    changeMade? : string
}

const AccountActivity : FC <accountActivityProps>  = (p) =>  {
    
    
    return (
        <TableContainer component={Paper}>
            <Table style={{minWidth: "650"}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        <TableCell size="medium" >DATE</TableCell>
                        <TableCell >TIME</TableCell>
                        <TableCell >IP ADDRESS</TableCell>
                        <TableCell >CHANGE MADE</TableCell>
                        <TableCell >ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataSource.map((row) => (
                        <TableRow >
                            <TableCell > {row.date} </TableCell>
                            <TableCell style={ { color: "blue"}}>{row.time}</TableCell>
                            <TableCell >{row.ipAddress}</TableCell>
                            <TableCell style={ row.changeMade === "Disconnection"? { color: "red"} :  {color: "green"}}>{row.changeMade}</TableCell>
                            <TableCell>
                                <Button color="primary">Login</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default AccountActivity;
