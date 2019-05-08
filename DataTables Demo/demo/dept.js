<script type="text/javascript">
    var dataTable;
    $(function () {

        dataTable = $('#editable').on('preXhr.dt', function (e, settings, data) {
            layer.load(1);
        }).on('xhr.dt', function (e, settings, json, xhr) {
            layer.closeAll('loading');
        }).DataTable({
            /**
             l - Length changing �ı�ÿҳ��ʾ���������ݵĿؼ�
             f - Filtering input ��ʱ������ؼ�
             t - The Table �����
             i - Information ��������Ϣ�ؼ�
             p - Pagination ��ҳ�ؼ�
             r - pRocessing ���صȴ���ʾ��Ϣ
             **/
            "dom": "lpt",
            "lengthMenu": [500],
            "ordering": false, //��������
            "processing": true,
            "serverSide": true,
            "ajax": {url: "data.json"},
            "scrollX": true,
            "autoWidth": true,
            "columns": [
                {"data": "deptId"},
                {"data": "name"},
                {"data": "nameEn"},
                {"data": "deptCode"},
                {"data": "headMan"},
                {"data": "tel"},
                {"data": "address"},
                {"data": "functions"},
                {"data": "status"},
                {"data": "createBy"},
                {"data": "createTime"},
                {"data": "deptId"}
            ],
            "columnDefs": [
                {
                    "defaultContent": "",
                    "targets": "_all"
                },
                {
                    "targets": 0, "render": function (data, type, row, meta) {
                        var html = "<input type=\"checkbox\" value=\"" + row.deptId + "\" class=\"i-checks\" name=\"deptIds\">";
                        return html;
                    }
                },
                {"targets": 8, "render": function (data, type, row, meta) {
                        if (row.status === true) {
                            return "<button type='button' class='btn btn-primary btn-xs' onclick=\"updateStatus('" + row.deptId + "','false');\"><i class='fa fa-refresh'></i> ����</button>";
                        } else {
                            return "<button type='button' class='btn btn-danger btn-xs' onclick=\"updateStatus('" + row.deptId + "','true');\"><i class='fa fa-refresh'></i> ����</button>";
                        }
                    }
                },
                {
                    "targets": 11, "render": function (data, type, row, meta) {
                        var html = "<a onclick=\"edit('" + row.deptId + "');\" class='btn btn-success btn-xs' ><i class='fa fa-edit'></i> �༭</a> ";
                        html = html + "<a onclick=\"deleteObject('" + row.deptId + "');\" class='btn btn-danger btn-xs' ><i class='fa fa-trash'></i> ɾ��</a> ";
                        return html;
                    }
                }
            ]
        });

        new $.fn.dataTable.FixedColumns(dataTable,{
            "iLeftColumns":2,
            "iRightColumns":1,
            "drawCallback": function(){
				//������ע������ΪIcheck��س�ʼ���������Ѿ��������ļ������� 


                //�ػ�Icheck
                //iCheckInitFunction();
                //��������ȫѡ�¼�
                //TableiCheck(".DTFC_Cloned thead tr th input.i-checks", ".DTFC_Cloned tbody tr td input.i-checks");
            }
        });
    });

</script>