<template>
  <table>
    <thead>
    <tr>
      <th v-for="(col, index) in columns" :key="index">{{ col.title }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, indexTr) in data" :key="indexTr">
      <td v-for="(col, indexTd) in columns" :key="indexTd">
        <template v-if="'render' in col">
          <RenderRow :row="row" :column="col" :index="indexTr" :render="col.render"></RenderRow>
        </template>
        <template v-else-if="'slot' in col">
          <mySlot :row="row" :column="col" :index="indexTr"></mySlot>
        </template>
        <template v-else>
          {{ row[col.key] }}
        </template>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  import mySlot from './slot'
  const RenderRow = {
    functional: true,
    props: {
      row: Object,
      column: Object,
      index: Number,
      render: Function
    },
    render: (h, context) => {
      const params = {
        row: context.props.row,
        column: context.props.column,
        index: context.props.index
      }
      return context.props.render(h, params)
    }
  }
  export default {
    provide () {
      return {
        tableRoot: this
      }
    },
    components: {
      RenderRow, mySlot
    },
    props: {
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style>
  table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
  }
  table th{
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
  table td, table th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
</style>