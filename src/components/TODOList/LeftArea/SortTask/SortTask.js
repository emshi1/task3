import React from 'react';
import style from './SortTask.module.css';

function SortTask (){
    return (
        <form className = {style.sort}>
        <select className = {style.sel}>
            <option defaultValue = "Неисполненные">Неисполненные</option>
            <option value = "Исполненные">Исполненные</option>
            <option value = "Все">Все</option>
        </select>
        </form>
    );
}

export default SortTask;