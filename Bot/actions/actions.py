from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
# from rasa_sdk.forms import FormAction
import mysql.connector
import feedparser
import re
#-------------------------------------------------------------------------------------------------------------
# #--------------------------------------------------------------------------------------------------------------
#------------------------------------------------------------------------------------------------------------------
# #-------------------------------------------------------------------------------------------------------------
    
#---------------------------------------------------------------------
class action_report_month(Action):

    def name(self):
        return "action_report_month"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        monthBot = tracker.get_slot("month")
        monthYearBot = tracker.get_slot("month_year")
        month = int(monthBot)
        monthYear =int(monthYearBot)
        myconn = mysql.connector.connect(host = "localhost", user = "root", 
                    passwd = "",database="report")
        curTree =myconn.cursor()
        def findYear(year):
            yearComparison = "SELECT * FROM report_month"
            curTree.execute(yearComparison)  
            result = curTree.fetchall()
            asscess = 0
            for x in result:
                if(x[1] != year):
                    asscess = 1
                else:
                    asscess = 0
                    break
            return asscess
        if(1<= month <= 12):
            if (findYear(monthYear) == 1):
                dispatcher.utter_message('Báo cáo này không có trong cơ sở dữ liệu')
            else:
                yearSelect = "SELECT * FROM report_month WHERE month={} AND year={}".format(month,monthYear)
                curTree.execute(yearSelect)  
                result = curTree.fetchall()
                for x in result:
                    dispatcher.utter_message('Đây là báo cáo tháng '+ monthBot + ' năm ' + monthYearBot + ' link: ' + x[2])
        else:
            dispatcher.utter_message('Tháng không hợp lệ! Vui lòng nhập lại tháng!')            
        myconn.rollback()
        myconn.close()
        return []
#---------------------------------------------------------------------
class action_report_quarter(Action):

    def name(self):
        return "action_report_quarter"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        quarterBot = tracker.get_slot("quarter")
        quarterYearBot = tracker.get_slot("quarter_year")
        quarter = int(quarterBot)
        quarterYear = int(quarterYearBot)
        myconn = mysql.connector.connect(host = "localhost", user = "root", 
                    passwd = "",database="report")
        curTree =myconn.cursor()
        def findYear(year):
            yearComparison = "SELECT * FROM report_quarter"
            curTree.execute(yearComparison)  
            result = curTree.fetchall()
            asscess = 0
            for x in result:
                if(x[1] != year):
                    asscess = 1
                else:
                    asscess = 0
                    break
            return asscess
        if(1<= quarter <= 4):
            if (findYear(quarterYear) == 1):
                dispatcher.utter_message('Báo cáo này không có trong cơ sở dữ liệu')
            else:
                yearSelect = "SELECT * FROM report_quarter WHERE quarter={} AND year={}".format(quarter,quarterYear)
                curTree.execute(yearSelect)  
                result = curTree.fetchall()
                for x in result:
                    dispatcher.utter_message('Đây là báo cáo quý '+ quarterBot + ' năm ' + quarterYearBot + ' link: ' + x[2])
        else:
            dispatcher.utter_message('Quý không hợp lệ! Vui lòng nhập lại!')
        myconn.rollback()
        myconn.close()
       

        return []
#---------------------------------------------------------------------
class action_report_year(Action):

    def name(self):
        return "action_report_year"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        yearBot = tracker.get_slot("year")
        year = int(yearBot)
        myconn = mysql.connector.connect(host = "localhost", user = "root", 
                    passwd = "",database="report")
        curTree =myconn.cursor()
        def findYear(year):
            yearComparison = "SELECT * FROM report_year"
            curTree.execute(yearComparison)  
            result = curTree.fetchall()
            asscess = 0
            for x in result:
                if(x[0] != year):
                    asscess = 1
                else:
                    asscess = 0
                    break
            return asscess
        if (findYear(year) == 1):
            dispatcher.utter_message('Báo cáo này không có trong cơ sở dữ liệu')
        else:
            yearSelect = "SELECT * FROM report_year WHERE year={}".format(year)
            curTree.execute(yearSelect)  
            result = curTree.fetchall()
            for x in result:
                dispatcher.utter_message('Đây là báo cáo năm '+ yearBot + ' link: ' + x[1])
        myconn.rollback()
        myconn.close()
        return []