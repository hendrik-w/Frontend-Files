<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

  <xsl:for-each select="TagCloudData/EntriesByLabel/Karlsruhe/Entries/Entry">
    <li><xsl:value-of select="HashTag" />,<xsl:value-of select="Counts" /></li>
  </xsl:for-each>

</xsl:template>

</xsl:stylesheet>
