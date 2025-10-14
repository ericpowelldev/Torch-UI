import type { Meta, StoryObj } from "@storybook/react";
import Component from "./index";

import React from "react";

import TableWrapper from "../TableWrapper";
import Table from "../Table";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import TableRow from "../TableRow";
import TableCell from "../TableCell";

import { sortTableRows } from "../../utils/helpers";

const tableRows = [
  {
    id: 1,
    name: "John Smith",
    age: 44,
    height: 179,
    weight: 69,
    status: "Active",
  },
  {
    id: 2,
    name: "Frederick Ramsey",
    age: 26,
    height: 162,
    weight: 62,
    status: "Active",
  },
  {
    id: 3,
    name: "Timothy Brown",
    age: 29,
    height: 172,
    weight: 65,
    status: "Active",
  },
  {
    id: 4,
    name: "Derek Green",
    age: 32,
    height: 181,
    weight: 70,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Jimmie Johnson",
    age: 51,
    height: 202,
    weight: 78,
    status: "Active",
  },
  {
    id: 6,
    name: "Garrett Rowley",
    age: 30,
    height: 183,
    weight: 68,
    status: "Active",
  },
  {
    id: 7,
    name: "Dylan Miller",
    age: 31,
    height: 193,
    weight: 75,
    status: "Active",
  },
  {
    id: 8,
    name: "Connor Johnson",
    age: 27,
    height: 185,
    weight: 72,
    status: "Inactive",
  },
  {
    id: 9,
    name: "Ryan Davis",
    age: 22,
    height: 194,
    weight: 77,
    status: "Active",
  },
  {
    id: 10,
    name: "Matthew Wilson",
    age: 18,
    height: 182,
    weight: 67,
  },
  {
    id: 11,
    name: "Andrew Brown",
    age: 65,
    height: 175,
    weight: 65,
    status: "Inactive",
  },
  {
    id: 12,
    name: "Joshua Miller",
    age: 20,
    height: 170,
    weight: 61,
    status: "Inactive",
  },
];

const meta: Meta<typeof Component> = {
  title: "Display/Table",
  tags: ["autodocs"],
  component: Component,
  argTypes: {
    // General Properties //

    props: {
      description: "Nested properties of the child components.",
      table: {
        disable: true,
      },
    },
    classes: {
      description: "Nested CSS classes of the child components.",
      table: {
        disable: true,
      },
    },
    className: {
      description: "CSS class of the root component.",
      table: {
        disable: true,
      },
    },
    style: {
      description: "Inline styling of the root component.",
      table: {
        disable: true,
      },
    },
    children: {
      description: "Content inside of the component.",
      table: {
        disable: true,
      },
    },

    // Specialized Properties //

    paddingHorizontal: {
      description: "Horizontal padding of the table cells.",
      control: {
        type: "range",
        min: 0,
        max: 6,
        step: 1,
      },
    },
    paddingVertical: {
      description: "Vertical padding of the table cells.",
      control: {
        type: "range",
        min: 0,
        max: 6,
        step: 1,
      },
    },
    sortUIEnabled: {
      description:
        "Should the table cells be sortable? (NOTE: This will only disable the sorting UI, not the sorting functionality)",
      control: {
        type: "boolean",
      },
    },
    stickyHeader: {
      description: "Should the header be sticky?",
      control: {
        type: "boolean",
      },
    },
    zIndex: {
      description: "Z-index of the table.",
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  render: (args) => {
    const [orderBy, setOrderBy] = React.useState<string>(`id`);
    const [orderDirection, setOrderDirection] = React.useState<`asc` | `desc`>(`asc`);

    const [sortedTableRows, setSortedTableRows] = React.useState(tableRows);

    const handleOrderBy = (column: string) => {
      if (orderBy === column) setOrderDirection(orderDirection === `asc` ? `desc` : `asc`);
      else setOrderBy(column);
    };

    React.useEffect(() => {
      const sorted = sortTableRows(tableRows, orderBy, orderDirection);
      setSortedTableRows(sorted);
    }, [orderBy, orderDirection]);

    return (
      <TableWrapper>
        <Table {...args}>
          <TableHead style={{ backgroundColor: `#000`, color: `#fff` }}>
            <TableRow>
              <TableCell
                sortActive={orderBy === `id`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`id`)}
                style={{ border: `1px solid #00000020` }}
              >
                ID
              </TableCell>
              <TableCell
                sortActive={orderBy === `name`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`name`)}
                style={{ border: `1px solid #00000020` }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `age`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`age`)}
                style={{ border: `1px solid #00000020` }}
              >
                Age
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `height`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`height`)}
                style={{ border: `1px solid #00000020` }}
              >
                Height
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `weight`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`weight`)}
                style={{ border: `1px solid #00000020` }}
              >
                Weight
              </TableCell>
              <TableCell
                align="right"
                sortActive={orderBy === `status`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`status`)}
                style={{ border: `1px solid #00000020` }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedTableRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ border: `1px solid #00000020` }}>{row.id}</TableCell>
                <TableCell style={{ border: `1px solid #00000020` }}>{row.name}</TableCell>
                <TableCell align="center" style={{ border: `1px solid #00000020` }}>
                  {row.age}
                </TableCell>
                <TableCell align="center" style={{ border: `1px solid #00000020` }}>
                  {row.height}
                </TableCell>
                <TableCell align="center" style={{ border: `1px solid #00000020` }}>
                  {row.weight}
                </TableCell>
                <TableCell align="right" style={{ border: `1px solid #00000020` }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    );
  },
};

export const WithoutStyling: Story = {
  render: (args) => {
    return (
      <TableWrapper>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    );
  },
};

export const WithStyling: Story = {
  render: (args) => {
    const [orderBy, setOrderBy] = React.useState<string>(`id`);
    const [orderDirection, setOrderDirection] = React.useState<`asc` | `desc`>(`asc`);

    const [sortedTableRows, setSortedTableRows] = React.useState(tableRows);

    const handleOrderBy = (column: string) => {
      if (orderBy === column) setOrderDirection(orderDirection === `asc` ? `desc` : `asc`);
      else setOrderBy(column);
    };

    React.useEffect(() => {
      const sorted = sortTableRows(tableRows, orderBy, orderDirection);
      setSortedTableRows(sorted);
    }, [orderBy, orderDirection]);

    return (
      <TableWrapper style={{ border: `1px solid #00000020`, borderRadius: `10px` }}>
        <Table {...args}>
          <TableHead>
            <TableRow style={{ backgroundColor: `#242C40`, color: `white` }}>
              <TableCell
                sortActive={orderBy === `id`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`id`)}
              >
                ID
              </TableCell>
              <TableCell
                sortActive={orderBy === `name`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`name`)}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `age`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`age`)}
              >
                Age
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `height`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`height`)}
              >
                Height
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `weight`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`weight`)}
              >
                Weight
              </TableCell>
              <TableCell
                align="right"
                sortActive={orderBy === `status`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`status`)}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedTableRows.map((row, i) => (
              <TableRow
                key={row.id}
                style={{ backgroundColor: i % 2 === 0 ? `transparent` : `#00000010` }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.height}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    );
  },
};

export const WithScrollingAndStickyHeader: Story = {
  render: (args) => {
    const [orderBy, setOrderBy] = React.useState<string>(`id`);
    const [orderDirection, setOrderDirection] = React.useState<`asc` | `desc`>(`asc`);

    const [sortedTableRows, setSortedTableRows] = React.useState(tableRows);

    const handleOrderBy = (column: string) => {
      if (orderBy === column) setOrderDirection(orderDirection === `asc` ? `desc` : `asc`);
      else setOrderBy(column);
    };

    React.useEffect(() => {
      const sorted = sortTableRows(tableRows, orderBy, orderDirection);
      setSortedTableRows(sorted);
    }, [orderBy, orderDirection]);

    return (
      <TableWrapper
        style={{ maxHeight: "256px", border: `1px solid #00000020`, borderRadius: `10px` }}
      >
        <Table stickyHeader {...args}>
          <TableHead>
            <TableRow style={{ backgroundColor: `#242C40`, color: `white` }}>
              <TableCell
                sortActive={orderBy === `id`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`id`)}
              >
                ID
              </TableCell>
              <TableCell
                sortActive={orderBy === `name`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`name`)}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `age`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`age`)}
              >
                Age
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `height`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`height`)}
              >
                Height
              </TableCell>
              <TableCell
                align="center"
                sortActive={orderBy === `weight`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`weight`)}
              >
                Weight
              </TableCell>
              <TableCell
                align="right"
                sortActive={orderBy === `status`}
                sortDirection={orderDirection}
                onClick={() => handleOrderBy(`status`)}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedTableRows.map((row, i) => (
              <TableRow
                key={row.id}
                style={{ backgroundColor: i % 2 === 0 ? `transparent` : `#00000010` }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.height}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    );
  },
};
