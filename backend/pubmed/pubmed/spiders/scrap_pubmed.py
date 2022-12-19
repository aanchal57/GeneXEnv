import scrapy
import csv
import pandas as pd
import  os

# REMOVE THIS IF YOU RUN THIS FILE FOR MORE THAN ONE TIME
with open(os.path.join(r'C:\Users\HP\Documents\pubmed\pubmed',"pubmed.csv"), "w") as file1:
    fieldnames = ['Gene','Key','Title', 'Abstract','Pm_id','Url'] #adding header to file
    write = csv.writer(file1)
    write.writerow(fieldnames)

class ScrapPubmedSpider(scrapy.Spider):
    name = 'scrap_pubmed'
    allowed_domains = ['pubmed.ncbi.nlm.nih.gov']
    start_urls = ['http://pubmed.ncbi.nlm.nih.gov/']

    def parse(self, response):
        df=pd.read_csv(r'C:\Users\HP\Documents\pubmed\pubmed\Gene_env.csv')
        for i in range(df.shape[0]):
        #for i in range(6):
            
            url='http://pubmed.ncbi.nlm.nih.gov/?term={}+{}'.format(str(df['Gene'][i]),str(df['Env'][i]))
           
            yield scrapy.Request(url=url, callback=self.parse_pages,meta={'url': url,'gene':df['Gene'][i],
            'env':df['Env'][i]})

    def parse_term(self,response):
         url=response.meta['url']
         gene=response.meta['gene']
         env=response.meta['env']
         pages=response.xpath('//label[@class="of-total-pages"]/text()').get()[3:]
         for i in range(int(pages)):
            if i==0:
                 link=url
            elif i==1:
                continue
            else:
                 link=url+'&page={}'.format(i)
            yield scrapy.Request(url=link, callback=self.parse_pages,meta={'gene':gene,'env':env})
    
    def parse_pages(self,response):
        gene=response.meta['gene']
        env=response.meta['env']
        abst=response.xpath("//div[@class='search-results-chunks']/div/article")
        for res in abst:
            abst1=res.xpath("./div[2]/div/div[2]/div[@class='full-view-snippet']/text()").extract()
            abst2=res.xpath("./div[2]/div/div[2]/div[@class='full-view-snippet']/b/text()").extract()
            
            
            for i in range(len(abst1)):
                
                abst1[i]=(abst1[i].strip("\n")).strip()
                abst1[i]=(abst1[i].strip()).strip("\n")

            if abst1[0]=='' and len(abst1)<=2:
                abst1=res.xpath("./div[2]/div/div[2]/div[@class='full-view-snippet']/p/text()").extract()
                abst2=res.xpath("./div[2]/div/div[2]/div[@class='full-view-snippet']/p/b/text()").extract() 
                for i in range(len(abst1)):
                    abst1[i]=(abst1[i].strip("\n")).strip()
                    abst1[i]=(abst1[i].strip()).strip("\n")
            abstract=""
            i1=0 
            if len(abst2)!=0:
                
                for i2 in range(len(abst2)):
                    abstract=abstract+" "+abst1[i1]+" "+abst2[i2]
                    i1=i1+1
                abstract=abstract+" "
            for i in range(i1,len(abst1)):
                    abstract=abstract+abst1[i1]
                    i1=i1+1
            pm_id=res.xpath("./div[2]/div/div[1]/span[@class='citation-part']/span/text()").get()
            
            link='http://pubmed.ncbi.nlm.nih.gov/'+pm_id
            yield scrapy.Request(url=link, callback=self.parse_article,meta={'abstract': abstract,'pm_id':pm_id,
            'gene':gene,'env':env})
    
    def parse_article(self,response):
        gene=response.meta['gene']
        env=response.meta['env']
        title=response.xpath("//h1[@class='heading-title']/text()").get().strip()
        abstract=response.meta['abstract']
        pm_id=response.meta['pm_id']
        link_article=response.url
        data = [gene,env,title, abstract,pm_id,link_article]
        print(data)
        with open(os.path.join(r'C:\Users\HP\Documents\pubmed\pubmed',"pubmed.csv"), "a+",newline='') as file1:
             #adding header to file
            write = csv.writer(file1)
            write.writerow(data)

    
            

        
