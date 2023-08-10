function get_current_month (){
    const d = new Date();
    let m = d.getMonth();
    let m_string = m < 10 ? "0" + m : m.toString();
    return m_string;
}

function get_current_month_sum_table(project,dataset,table_prefix){
    let current_month = get_current_month();
    let table_id = "`" + `${project}.${dataset}.${table_prefix}-${current_month}-*` + "`";
    let query = `SELECT name, SUM(money) as sum_money, insert_time FROM ${table_id} GROUP BY name, insert_time`;
    return query
}

module.exports = {get_current_month_sum_table}