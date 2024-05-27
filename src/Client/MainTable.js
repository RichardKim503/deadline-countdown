import React from 'react';
import DeadlineBox from './DeadlineBox';

export default function MainTable(){

    return(
        <div>
            <table id='deadline_main_table'>
                <tbody>
                    <tr>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                        <td>
                            <div className='deadline_container'>
                                <DeadlineBox />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}