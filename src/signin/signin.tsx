import s from './signin.module.css'
import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"
import AccountActivity from "../accountActivity/accountActivity"




export default function signin ()  {

    return(
        <div className={s.main}>
            <div className={s.heading}>Sign in & Security </div>
            <>
                <div className={s.signin}>
                    <div className={s.signinheading}>
                        <h3>Sign In</h3>
                    </div>
                    <div className={s.signinemail}>
                        <TextField
                            inputProps={{color: "blue"}}
                            autoFocus
                            required
                            fullWidth
                            margin= "normal"
                            variant="outlined"
                            label="Email Address"
                            type="email"
                            color="primary"
                        />
                        <TextField
                            inputProps={{color: "blue"}}
                            autoFocus
                            required
                            fullWidth
                            margin= "normal"
                            variant="outlined"
                            label="Confirm Email Address"
                            type="email"
                            color="primary"
                        />
                    </div>
                </div>
                <Divider variant="middle" />
                <div className={s.signin}>
                    <div className={s.signinheading}>
                        <h3>Security Information</h3>
                    </div>
                    <div className={s.signinemail}>
                        <div className={s.textfieldbutton}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                margin= "normal"
                                variant="outlined"
                                label="Old Password"
                                type="password"
                            />
                            <Button color="primary">Edit</Button>
                        </div>
                        <div className={s.textfieldbutton} >
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                margin= "normal"
                                variant="outlined"
                                label="New Password"
                                type="password"
                            />
                            <Button color="primary">Edit</Button>
                        </div>
                        <div className={s.textfieldbutton}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                margin= "normal"
                                variant="outlined"
                                label="Confirm New Password"
                                type="password"
                            />
                            <Button color="primary">Edit</Button>
                        </div>
                    </div>
                </div>
            </>
            <div className={s.accountactivity}>
                <div className={s.heading}>Account Activity</div>
                <AccountActivity />
            </div>

        </div>
    );
}
