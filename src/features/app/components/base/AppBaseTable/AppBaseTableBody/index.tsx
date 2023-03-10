// Styled Components
import styled from 'styled-components'

// Antd
import { Table, TableProps } from 'antd'

// eslint-disable-next-line
const AppBaseTableBody = styled((props: TableProps<any>) => (
  <Table
    {...props}
    rowKey={props?.rowKey || 'id'}
    pagination={false}
    scroll={{ x: 1024 }}
  />
))`
  margin: 30px 0px;
`

export { AppBaseTableBody }
