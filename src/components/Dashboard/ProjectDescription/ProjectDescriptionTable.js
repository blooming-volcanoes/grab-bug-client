/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";
import React, { useMemo } from "react";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
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
        page,
        nextPage,
        previousPage,
        prepareRow,
        state, // From useGlobalFilter
        setGlobalFilter, // From useGlobalFilter,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );
    const { globalFilter, pageIndex, pageSizes } = state;

    return (
        <>
            <div className="flex w-full flex-col pt-28 md:flex-row md:justify-between md:px-6">
                <select
                    className="border-0 text-sm"
                    value={pageSizes}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[5, 10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            </div>

            <table className="md:mx-auto" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    className="border-b-2  border-solid border-black text-left"
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
                    {page.map((row) => {
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
            <div className="flex justify-end">
                <span className="text-black">
                    Showing {pageIndex + 1} of {pageOptions.length} entries
                </span>
                <button
                    className={`${
                        !canPreviousPage ? "bg-amber-200/100" : ""
                    }  mr-2  rounded   bg-amber-400/100 py-1 px-1 text-xs text-white lg:px-3`}
                    type="button"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    {" "}
                    Previous{" "}
                </button>
                <button
                    className={`${
                        !canNextPage ? "bg-amber-200/100" : ""
                    }  mr-2  rounded   bg-amber-400/100 py-1 px-1 text-xs text-white lg:px-3`}
                    type="button"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    {" "}
                    Next
                </button>
            </div>
        </>
    );
}

export default ProjectDescriptionTable;
