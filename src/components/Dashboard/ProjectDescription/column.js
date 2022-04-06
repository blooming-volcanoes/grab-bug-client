const columns = [
    {
        Header: "Id",
        accessor: "id",
        maxWidth: 60,
        minWidth: 60,
        width: 60,
    },
    {
        Header: "Project Name",
        accessor: "project_name",
        maxWidth: 600,
        minWidth: 300,
        width: 300,
    },
    {
        Header: "Project Description",
        accessor: "project_description",
        maxWidth: 800,
        minWidth: 600,
        width: 700,
    },
    {
        filterable: false,
        Header: "Click here",
        accessor: "event",
        url: true,
        disableSortBy: true,
    },
];

export default columns;
