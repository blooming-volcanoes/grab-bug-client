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
        maxWidth: 400,
        minWidth: 200,
        width: 200,
    },
    {
        Header: "Project Description",
        accessor: "project_description",
        maxWidth: 400,
        minWidth: 400,
        width: 400,
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
