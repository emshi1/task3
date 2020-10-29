import React from 'react';
import style from './SortTask.module.css';

function SortTask (){
    return (
        <div className = {style.sort}>
        <select className = {style.sel}>
            <option defaultValue = "Неисполненные">Неисполненные</option>
            <option value = "Исполненные">Исполненные</option>
            <option value = "Все">Все</option>
        </select>
        </div>
    );
}

export default SortTask;