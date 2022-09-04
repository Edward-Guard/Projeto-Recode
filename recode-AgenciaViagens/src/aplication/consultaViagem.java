package aplication;

import java.sql.Connection;
import java.sql.Statement;

import db.DB;

import java.sql.ResultSet;
import java.sql.SQLException;

public class consultaViagem {

	public static void main(String[] args) {

		Connection conn = null;
		Statement st= null;
		ResultSet rs = null;
		
		
		try {
			conn = DB.getConnection();
			st = conn.createStatement();
			
			rs = st.executeQuery("select * from viagem");
			
			while (rs.next()) {
				System.out.println(rs.getInt("id")+" , " + rs.getString("origem")+" , "+rs.getString("destino")+" , "+ rs.getInt("passageiros"));
			}
					
		} catch (SQLException e) {
			e.printStackTrace();
			
		}
		
	}

}
