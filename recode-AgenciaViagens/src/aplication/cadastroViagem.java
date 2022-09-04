package aplication;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import db.DB;

public class cadastroViagem {

	public static void main(String[] args) {
		Connection conn = null;
		PreparedStatement st = null;
		
		try {
			conn = DB.getConnection();
			
			st = conn.prepareStatement(
					"INSERT INTO viagem "
					+ "(origem,destino,passageiros) "
					+"Values "
					+"(?,?,?)");
			st.setString(1, "Demacia");
			st.setString(2, "Piltover");
			st.setInt(3, 2);
			
			int rowsAffected = st.executeUpdate();
			
			System.out.println("Done! Rows Affected: "+ rowsAffected );
			}
			catch (SQLException e) {
				e.printStackTrace();
			}
			finally {
				DB.closeStatement(st);
				DB.closeConnection();
			}
		}
	}