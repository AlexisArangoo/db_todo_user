import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Task = db.define('tasks', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'brand_id'
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false
})

export default Task