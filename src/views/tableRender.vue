<template>
  <div>
    <h4>方案1</h4>
    <TableSlot :columns="columns1" :data="data">
      <template slot="name" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editName">
        </div>
        <div v-else>
          <span>{{row.name}}</span>
        </div>
      </template>
      <template slot="age" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editAge">
        </div>
        <div v-else>
          <span>{{row.age}}</span>
        </div>
      </template>
      <template slot="birthday" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editBirthday">
        </div>
        <div v-else>
          <span>{{row.birthday}}</span>
        </div>
      </template>
      <template slot="address" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editAddress">
        </div>
        <div v-else>
          <span>{{row.address}}</span>
        </div>
      </template>
      <template slot="user" slot-scope="{index, row}">
        <div v-if="editIndex===index">
          <button @click="handleSave(index)">保存</button>
          <button>取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">编辑</button>
        </div>
      </template>
    </TableSlot>
    <h4>方案2</h4>
    <table-render ref="table" :columns="columns2" :data="data">
      <template slot-scope="{ row, index }" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="age">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="birthday">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="address">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <button @click="handleSave(index)">保存</button>
          <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">操作</button>
        </div>
      </template>
    </table-render>
    <h4>方案3</h4>
    <table-render :columns="columns1" :data="data">
      <template slot="name" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editName">
        </div>
        <div v-else>
          <span>{{row.name}}</span>
        </div>
      </template>
      <template slot="age" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editAge">
        </div>
        <div v-else>
          <span>{{row.age}}</span>
        </div>
      </template>
      <template slot="birthday" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editBirthday">
        </div>
        <div v-else>
          <span>{{row.birthday}}</span>
        </div>
      </template>
      <template slot="address" slot-scope="{index, row}">
        <div v-if="editIndex === index">
          <input type="text" v-model="editAddress">
        </div>
        <div v-else>
          <span>{{row.address}}</span>
        </div>
      </template>
      <template slot="user" slot-scope="{index, row}">
        <div v-if="editIndex===index">
          <button @click="handleSave(index)">保存</button>
          <button>取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">编辑</button>
        </div>
      </template>
    </table-render>
    <h4>render function</h4>
    <table-render :columns="columns" :data="data"></table-render>
  </div>
</template>
<script>
  import TableRender from '../components/table/table.vue'
  import TableSlot from '../components/table/tableSlot'
  export default {
    components: { TableRender, TableSlot },
    data () {
      return {
        editName: '',  // 第一列输入框
        editAge: '',  // 第二列输入框
        editBirthday: '',  // 第三列输入框
        editAddress: '',  // 第四列输入框
        editIndex: -1,
        columns2: [],
        columns1: [
          {
            title: '姓名',
            key: 'name',
            slot: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            slot: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday',
            slot: 'birthday'
          },
          {
            title: '地址',
            key: 'address',
            slot: 'address'
          },
          {
            title: '操作',
            slot: 'user'
          }
        ],
        columns: [
          {
            title: '姓名',
            key: 'name',
            render: (h, { row, index }) => {
              let son
              if (this.editIndex === index) {
                son = [h('input', {
                  domProps: {
                    value: row.name
                  },
                  on: {
                    input: (e) => {
                      this.editName = e.target.value
                    }
                  }
                })]
              } else {
                son = row.name
              }
              return h('div', son)
            }
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '出生日期',
            key: 'birthday',
            render: (h, { row, column }) => {
              let str = new Date(parseInt(row[column.key])).toLocaleString()
              return h('p', str)
            }
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            render: (h, { row, index }) => {
              if (this.editIndex === index) {
                return [
                  h('button', {
                    on: {
                      click: () => {
                        this.data[index].name = this.editName
                        this.data[index].age = this.editAge
                        this.data[index].birthday = this.editBirthday
                        this.data[index].address = this.editAddress
                        this.editIndex = -1
                      }
                    }
                  }, '保存'),
                  h('button', {
                    on: {
                      click: () => {
                        this.editIndex = -1
                      }
                    }
                  }, '取消')
                ]
              } else {
                return h('button', {
                  size: 'mini',
                  on: {
                    click: () => {
                      this.editName = row.name
                      this.editAge = row.age
                      this.editAddress = row.address
                      this.editBirthday = row.birthday
                      this.editIndex = index
                    }
                  }
                }, '修改')
              }
            }
          }
        ],
        data: [
          {
            name: '王小明',
            age: 18,
            birthday: '919526400000',
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            birthday: '696096000000',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            birthday: '563472000000',
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            birthday: '687024000000',
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    mounted () {
      this.columns2 = [
        {
          title: '姓名',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.name({
                row: row,
                column: column,
                index: index
              })
            )
          }
        },
        {
          title: '年龄',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.age({
                row: row,
                column: column,
                index: index
              })
            )
          }
        },
        {
          title: '出生日期',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.birthday({
                row: row,
                column: column,
                index: index
              })
            )
          }
        },
        {
          title: '地址',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.address({
                row: row,
                column: column,
                index: index
              })
            )
          }
        },
        {
          title: '操作',
          render: (h, { row, column, index }) => {
            return h(
              'div',
              this.$refs.table.$scopedSlots.action({
                row: row,
                column: column,
                index: index
              })
            )
          }
        }
      ]
    },
    methods: {
      getBirthday (birthday) {
        const date = new Date(parseInt(birthday))
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return `${year}-${month}-${day}`
      },
      handleEdit (row, index) {
        this.editIndex = index
        this.editName = row.name
        this.editAge = row.age
        this.editBirthday = row.birthday
        this.editAddress = row.address
      },
      handleSave (index) {
        this.data[index].name = this.editName
        this.data[index].age = this.editAge
        this.data[index].birthday = this.editBirthday
        this.data[index].address = this.editAddress  // 第四列输入框
        this.editIndex = -1
      }
    }
  }
</script>