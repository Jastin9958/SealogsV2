import dayjs from 'dayjs'
import db from './db'

class Engineer_LogBookEntrySectionModel {
    async save(data) {
        try {
            // Use the db.Engineer_LogBookEntrySection.put() method to save data to the table
            await db.Engineer_LogBookEntrySection.put({
                ...data,
                idbCRUD: 'Update',
                idbCRUDDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            })
            return data
        } catch (error) {
            throw error
        }
    }
    async getAll() {
        try {
            const data = await db.Engineer_LogBookEntrySection.toArray()
            return data
        } catch (error) {
            throw error
        }
    }
    async getById(id) {
        try {
            // Use the db.Engineer_LogBookEntrySection.get() method to retrieve data by idIs
            const data = await db.Engineer_LogBookEntrySection.get(`${id}`)
            return data
        } catch (error) {
            throw error
        }
    }
    async getByIds(ids) {
        try {
            const data = await db.Engineer_LogBookEntrySection.where('id')
                .anyOf(ids)
                .toArray()
            return data
        } catch (error) {
            throw error
        }
    }
    async bulkAdd(data) {
        try {
            // Use the db.Engineer_LogBookEntrySection.bulkAdd() method to save multiple data to the table
            await db.Engineer_LogBookEntrySection.bulkAdd(data)
            return data
        } catch (error) {
            throw error
        }
    }
    async setProperty(id) {
        try {
            if(id){
                let data = await db.Engineer_LogBookEntrySection.get(`${id}`)
                data.idbCRUD = 'Download'
                data.idbCRUDDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
                await db.Engineer_LogBookEntrySection.update(id, data)
                return data
            }
        } catch (error) {
            throw error
        }
    }
    async multiUpdate (data) {
        try {
            data.map( async item => {
                await db.Engineer_LogBookEntrySection.update(item.id, item)
            })
        } catch (error) {
            console.log('Engineer_LogBookEntrySection:',error)
        }
    }
}

export default Engineer_LogBookEntrySectionModel
