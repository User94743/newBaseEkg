import React, {useEffect, useState} from "react";
import Menu from "../../menu/menuContainer";
import AccidentView from "./accidentView";
import style from "./accident.module.css";
import {NavLink} from "react-router-dom";
import Fuse from 'fuse.js';
import ReactPaginate from 'react-paginate';



const Accident = ({listMachine, accidents, deleteAccident, filterArray, filterArrayMachine, ...props}) => {

    const [machine, setMachine] = useState('Экскаватор');
    let mass = machine === 'Экскаватор' ? accidents : filterArrayMachine;
    let onMachineChange = (e) => {
        setMachine(e.target.value);
        filterArray(Number(e.target.value))
        mass = machine === 'Экскаватор' ? accidents : filterArrayMachine
    }

    const [data, setData] = useState(mass);


// machine === 'Экскаватор' ? accidents : accidents.filter(accident => accident.numberMachine === Number(machine))
    const fuse = new Fuse(mass, {
        keys: ["description", "part", "numberMachine", "nameAccident"],
    });

    const searchData = (pattern) => {
        if (!pattern || pattern === '') {
            setData(mass);
        }
        else {
            const result = fuse.search(pattern);
            const matches = [];

            if (!result.length) {
                setData([]);

            } else {
                result.forEach(({item}) => {
                    matches.push(item);
                });
                setData(matches);
            }
        }
    }

// PAGINATOR

    let items = data;

    function Items({ currentItems }) {
        return (
            <>
                {currentItems && currentItems.map(l =>
                    <AccidentView accident={l} key={l.id} deleteAccident={deleteAccident} />
                )}
            </>
        );
    }

    function PaginatedItems({ itemsPerPage}) {

        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(items.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);


        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <div className="d-flex justify-content-center">
                <ReactPaginate
                    nextLabel="Вперед"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={4}
                    pageCount={pageCount}
                    previousLabel="Назад"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
                </div>
            </>
        );
    }
// Use Effect
    useEffect(() => {
            setData(mass)
    }, [accidents, mass])

    return <div className="container-lg center">
        <Menu/>

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                    <div className="container-fluid">
                        <div className={style.filterAccident}>
                            <input onChange={(e) => searchData(e.target.value)} className="form-control me-2"
                                   type="search" placeholder="Поиск" aria-label="Search"/>
                        </div>
                        <div className={style.filterAccident}>
                            <select onChange={onMachineChange} className="form-select"
                                    aria-label="Default select example">
                                <option value={'Экскаватор'} selected>Экскаватор</option>
                                {listMachine.map(m =>
                                    <option value={m.number}>{m.number}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </form>
                <div className={style.filterAccident}>
                    <NavLink to={'/addaccident'} className="btn btn-primary" type="submit">Добавить аварию</NavLink>
                </div>
            </div>
            <br/>
            <br/>
        </nav>


        <PaginatedItems itemsPerPage={4} />



    </div>
}

export default Accident;