/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";
import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import COLUMNS from "./column";
import GlobalFilter from "./GlobalFilter";
import MOCK_DATA from "./MOCK_DATA.json";

function ProjectDescriptionTable() {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state, // From useGlobalFilter
        setGlobalFilter, // From useGlobalFilter
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy
    );
    const { globalFilter } = state;
    return (
        <>
            <div className="mx-auto flex w-5/6 justify-between">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>

            <table className="mx-auto" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    className="border-b-2 border-l border-solid border-black text-left"
                                    {...column.getHeaderProps(
                                        //
                                        column.getSortByToggleProps({
                                            style: {
                                                minWidth: column.minWidth,
                                                width: column.width,
                                            },
                                        })
                                    )}
                                >
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? " 🔽"
                                                : " 🔼"
                                            : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td
                                        className="border-b text-left"
                                        {...cell.getCellProps({
                                            style: { minWidth: cell.minWidth, width: cell.width },
                                        })}
                                    >
                                        {cell.column.Header === "Id" ||
                                        cell.column.Header === "Project Name" ||
                                        cell.column.Header === "Project Description" ? (
                                            cell.render("Cell")
                                        ) : (
                                            <div className="flex flex-col">
                                                <Link href="http://www.facebook.com">
                                                    <a className="text-indigo-300">
                                                        {" "}
                                                        Manage Users{" "}
                                                    </a>
                                                </Link>
                                                <Link href="http://www.facebook.com">
                                                    <a className="text-indigo-300"> Details </a>
                                                </Link>
                                            </div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => (
                                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    );
}

export default ProjectDescriptionTable;
