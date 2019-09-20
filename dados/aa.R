setwd('C:\\Users\\tadeu\\Desktop\\tadeu\\PERNOD-EMAIL\\dados')

library(jsonlite)


df=read.csv2('')

df=read.csv2('emails_-_Dummy.csv')
colnames(df)='EMAIL'
x <- toJSON(df)
writeLines(x, 'emails.json', useBytes = T)

df=read.csv2('ALARME_RUPTURA_TADEU_V2.csv')
x <- toJSON(df)
writeLines(x, 'mock_data.json', useBytes = T)
